import express from "express";
import suggestController from "../controller/suggestController.js";
import Authencation from '../utils/Authenication.js'

export  const router = express.Router()

router.get('/card',Authencation,suggestController,(req,res)=>{
    res.send("succes")
})


export default router

