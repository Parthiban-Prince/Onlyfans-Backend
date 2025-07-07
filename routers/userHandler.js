import express from 'express'
import {userDetails,userDetailsPost} from '../controller/userController.js'


export const router = express.Router()

//router.post('/:Profile',parser.fields([{name:"coverPhoto",maxCount:1},{name:"profilePhoto",maxCount:1}]),(req,res)=>{
  //  console.log(req.body)
    

   // res.status(200).json("Recevied")
//})

router.get('/:Profile',userDetails,(req,res)=>{
    res.status(200).json("Recevied")
})


router.get('/Posts',(req,res)=>{
  res.send("Recevied")
})


export default router