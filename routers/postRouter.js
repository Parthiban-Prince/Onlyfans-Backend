import express from 'express'
import Authencation from '../utils/Authenication.js'
import upload from '../utils/fileUpload.js'
import {AllpostFindcontroller, postController,postFindcontroller} from '../controller/postController.js'



const router = express.Router()



router.post('/:Posts',Authencation,upload.single('image'),postController,(req,res)=>{

  res.send("Recevied")
})

router.get('/:Posts',Authencation,postFindcontroller,(req,res)=>{

  res.send("Recevied")
})


export default router