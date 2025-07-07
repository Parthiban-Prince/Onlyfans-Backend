import express from 'express'
import validate from '../validation/zValidator.js'
import {signUpSchema,signInSchema} from '../validation/zsignSchema.js'
import{signUpController,signInController} from '../controller/authControllers.js'

const  router = express.Router()

router.post("/Signup",validate(signUpSchema),signUpController)

router.post("/Signin", validate(signInSchema),signInController)

router.post("/oAuth/Signup",(req,res)=>{
    res.status(201).json("Router user OAuth sign up is working")
})

export default router