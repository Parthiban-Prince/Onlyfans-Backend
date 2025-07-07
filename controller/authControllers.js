import { success } from "zod/v4"
import { signUpService,signInService } from "../service/authService.js"


export async function signUpController (req,res){
    try{
  

        const userDetails = await signUpService(req.body)

        console.log(userDetails)

        
         return res.json({
            message:"success",
            status:200,
            data:userDetails
         })

    }
    catch(error){
        console.log("Not received" +error)
    }
}


export async function signInController (req,res){
    try{

         const userDetails = await  signInService(req.body)
         console.log(userDetails)
         return res.json({
            message:"Verfied",
            status:200,
            data:userDetails
         })

    }
    catch(error){
        console.log("Not received" +error)
    }
}

export default {
    signUpController,
    signInController
}