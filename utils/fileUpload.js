import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import cloudinary from "../config/Cloudinaryconfig.js";
import streamifier from "streamifier";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

// ✅ Set ffmpeg path explicitly
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

// ✅ Use memory storage
const memoryStorage = multer.memoryStorage();

// ✅ Multer middleware (for route usage)
export const upload = multer({
  storage: memoryStorage,
  limits: { fileSize: 100 * 1024 * 1024 }, // 100MB
});

// ✅ Upload any image buffer (for images or thumbnails)
export const uploadImageToCloudinary = async (buffer, folder = "Posts") => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "image",
        public_id: `image_${uuidv4()}`,
      },
      (error, result) => {
        if (error) {
          console.error("❌ Image upload error:", error);
          return reject(error);
        }
        console.log(`✅ Uploaded Image to ${folder}:`, result.secure_url);
        resolve(result.secure_url);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// ✅ Upload video buffer
export const uploadVideoToCloudinary = async (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: "Videos",
        resource_type: "video",
        public_id: `video_${uuidv4()}`,
      },
      (error, result) => {
        if (error) {
          console.error("❌ Video upload error:", error);
          return reject(error);
        }
        console.log("✅ Uploaded Video URL:", result.secure_url);
        resolve(result.secure_url);
      }
    );
    streamifier.createReadStream(buffer).pipe(stream);
  });
};

// ✅ Extract 1 thumbnail frame from video buffer
export const extractThumbnailFromVideo = async (videoBuffer) => {
  return new Promise((resolve, reject) => {
    const inputStream = streamifier.createReadStream(videoBuffer);
    const buffers = [];

    ffmpeg(inputStream)
      .outputOptions(["-ss 00:00:01", "-vframes 1", "-f image2"])
      .format("image2pipe")
      .on("error", (err) => {
        console.error("❌ Thumbnail extraction error:", err);
        reject(err);
      })
      .pipe()
      .on("data", (chunk) => buffers.push(chunk))
      .on("end", () => {
        console.log("✅ Thumbnail extracted from video");
        resolve(Buffer.concat(buffers));
      });
  });
};

// ✅ Handle thumbnail logic (user-provided or generated)
export const handleThumbnail = async (videoBuffer, userThumbnailBuffer = null) => {
  if (userThumbnailBuffer) {
    console.log("📤 User uploaded a thumbnail. Using that.");
    return await uploadImageToCloudinary(userThumbnailBuffer, "Thumbnails");
  } else {
    console.log("⚙️ Generating thumbnail from video...");
    const thumbBuffer = await extractThumbnailFromVideo(videoBuffer);
    return await uploadImageToCloudinary(thumbBuffer, "Thumbnails");
  }
};
