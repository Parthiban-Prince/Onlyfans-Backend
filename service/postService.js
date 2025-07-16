import { createPost,postFindDatabse,AllpostFindDatabse,ownerPostFindDatabse,  findPostById,
    updatePostLikes } from "../Repository/postDatabse.js";
import {
  uploadImageToCloudinary,
  uploadVideoToCloudinary,
  handleThumbnail,
} from "../utils/fileUpload.js";


export const postCreateService = async (Post) => {
  const { body, files, user } = Post;
  const captions = body.captions || "";

  const mediaFile = files?.media?.[0];
  const imageFile = files?.image?.[0];
  const thumbnailFile = files?.thumbnail?.[0];

  if (!mediaFile) throw new Error("Media file is required");

  let mediaUrl = "";
  let thumbnailUrl = "";
  let imageUrl = "";

  if (mediaFile.mimetype.startsWith("video/")) {
    mediaUrl = await uploadVideoToCloudinary(mediaFile.buffer);
    thumbnailUrl = await handleThumbnail(mediaFile.buffer, thumbnailFile?.buffer);
  } else if (mediaFile.mimetype.startsWith("image/")) {
    mediaUrl = await uploadImageToCloudinary(mediaFile.buffer);
  }

  if (imageFile) {
    imageUrl = await uploadImageToCloudinary(imageFile.buffer);
  }

  const postData = {
    user: user._id,
    media: mediaUrl,
    thumbnail: thumbnailUrl || null,
    images: imageUrl || null,
    captions,
  };

  console.log("📝 Storing to MongoDB:", postData);

  const created = await createPost(postData); // Replace with your DB logic
  return created;
};

export async function postFindService(id) {

    console.log(id)

    try{
        const allPosts = await postFindDatabse(id)
        return allPosts
    }
    catch(error){
        console.log(error)
    }
    
}

export async function AllpostFindService() {


    try{
        const allPosts = await AllpostFindDatabse()
        return allPosts
    }
    catch(error){
        console.log(error)
    }
    
}


export async function ownerPostFindService(id) {

    console.log(id)

    try{
        const allPosts = await ownerPostFindDatabse(id)
        return allPosts
    }
    catch(error){
        console.log(error)
    }
    
}





export const handleToggleLike = async (postId, userId) => {
  // Retrieve the post from the repository
  const post = await findPostById(postId);
  if (!post) throw new Error('Post not found');

  // Apply business logic to determine updated state
  const alreadyLiked = post.likes.includes(userId);
  let updatedLikes;

  if (alreadyLiked) {
    updatedLikes = post.likes.filter(id => id.toString() !== userId);
  } else {
    updatedLikes = [...post.likes, userId];
  }

  // Delegate the database update to the repository layer
  const updatedPost = await updatePostLikes(postId, updatedLikes);

  return {
    message: alreadyLiked ? 'Unliked' : 'Liked',
    likesCount: updatedPost.likes.length,
    liked: !alreadyLiked
  };
};




export default {
    postCreateService,
    postFindService,
    AllpostFindService,
    ownerPostFindService,
    handleToggleLike
}