import express from 'express'
import Authencation from '../utils/Authenication.js'
import {
  upload,
  uploadVideoToCloudinary,
  uploadImageToCloudinary,
  extractThumbnailFromVideo
} from "../utils/fileUpload.js";
import {AllpostFindcontroller, postController,postFindcontroller} from '../controller/postController.js'
import {
  toggleLikeController,
  getPostLikesController,
  getPostLikeCountController,
  checkUserLikeController,
} from '../controller/likeController.js';




const router = express.Router()



router.post('/:Posts',Authencation, upload.fields([
    { name: 'media', maxCount: 1 },      // video or main image
    { name: 'thumbnail', maxCount: 1 },  // optional thumbnail for video
    { name: 'image', maxCount: 1 },      // additional image (e.g., preview, post content)
  ]),postController,(req,res)=>{

  res.send("Recevied")
})

router.get('/:Posts',Authencation,postFindcontroller,(req,res)=>{

  res.send("Recevied")
})






router.post('/:postId/toggle', Authencation, toggleLikeController);
router.get('/:postId/list', getPostLikesController);
router.get('/:postId/count', getPostLikeCountController);
router.get('/:postId/isLiked', Authencation, checkUserLikeController);


export default router