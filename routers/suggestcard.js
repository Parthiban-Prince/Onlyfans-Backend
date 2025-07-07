import express from "express";
import suggestController from "../controller/suggestController.js";

export  const router = express.Router()

router.get('/card',suggestController,(req,res)=>{
    res.send("succes")
})


export default router

