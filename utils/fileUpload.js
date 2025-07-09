import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/Cloudinaryconfig.js";
import multer from "multer";

    const storage = new CloudinaryStorage({
        cloudinary:cloudinary,
        params:{
            folder:"Posts",
            allowed_formats:['jpg','png','jpeg','webp'],
           
            public_id:(req,file)=>Date.now()+'-'+Math.round(Math.random()*1E9) + '_ '+file.originalname.split('_')[0],
        }

    })

    


   export const upload = multer({storage:storage});


    export default upload