import express from 'express'
import Authencation from '../utils/Authenication.js'
import {AllpostFindcontroller} from '../controller/postController.js'


export const router = express.Router()


router.get('/all',Authencation,AllpostFindcontroller,(req,res)=>{

  res.send("Recevied")
})

export default router