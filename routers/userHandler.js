import express from 'express'
import {userDetails,userDetailsPost} from '../controller/userController.js'
import user from '../utils/userUpload.js'
import postController from '../controller/postController.js'
import Authencation from '../utils/Authenication.js'


export const router = express.Router()


router.put('/Profile/update',Authencation,user.fields([{name:"coverPhoto",maxCount:1},{name:"profilePhoto",maxCount:1}]),userDetailsPost,(req,res)=>{
  res.status(200).json("Recevied")
})

router.get('/:Profile',Authencation,userDetails,(req,res)=>{
    res.status(200).json("Recevied")
})


export default router