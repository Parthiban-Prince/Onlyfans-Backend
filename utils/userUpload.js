import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/Cloudinaryconfig.js";
import multer from "multer";


    const storage = new CloudinaryStorage({
        cloudinary:cloudinary,
        params:{
            folder:"userDetailsPost",
            allowed_formats:['jpg','png','jpeg','webp'],
           
            public_id:(req,file)=>Date.now()+'-'+Math.round(Math.random()*1E9) + '_ '+file.originalname.split('_')[0],
        }

    })


const user = multer({storage:storage})

export default user