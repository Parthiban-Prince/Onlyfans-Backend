import jwt from 'jsonwebtoken'
import { generateToken, verifyToken } from '../utils/jwtToken.js'
import { generateFromEmail } from 'unique-username-generator'
import {userDatabasecreate,userDatafind, userDetailsForgot }from '../Repository/userDatabse.js'
import bcrypt from 'bcrypt'
import nodemailer from 'nodemailer'


export async function signUpService(userDetails){

    try{

        const username = generateFromEmail(userDetails.email,4)

        const userDatabase = {
            name:userDetails.name,
            email:userDetails.email,
            password:userDetails.password,
            username:username,
            coverPhoto:userDetails.coverUrl,
            profilePhoto:userDetails.PhotoUrl,
            Bio:userDetails.Bio

        }

        const userCreated = userDatabasecreate(userDatabase)
    



        return userCreated
        
    }catch(error){
        console.log(error)
    }




}


export async  function signInService(userDetails){

    try{

        console.log(userDetails)

        const user =  await userDatafind(userDetails.email)
        if(!user){
            throw{
                status:404,
                message:"User not found"
            }
        }


        const Password =  bcrypt.compareSync(userDetails.password,user.password)
        console.log(Password)

        if(!Password){
            throw{
                status:404,
                message:"Password Wrong"
            }
        }

               const userToken = {
            email:userDetails.email,
            username:user.username
        }

        console.log(userToken)

        if(!userToken){
              throw({
            message:"invalid Password or Email",
            status:404,
        })
        }

        const token =  generateToken(userToken)
        console.log(token)
        
        return token
        
    }catch(error){
        throw({
            message:"invalid Password or Email",
            status:404,
        })
    }




}


export async function forgotPasswordService(email) {


    const user = await userDetailsForgot(email);




    if (user.email) {
// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:465,
    secure:true,
    auth: {
        user: 'parthiban180920@gmail.com',
        pass: 'kkkwyfaqdzovvbqg'
    }
});

// Wrap in an async IIFE so we can use await.
(async () => {
  const info = await transporter.sendMail({
    from: "Onlyfans Clone",
    to: email,
    subject: "Restore access",
    text: "Still development forgot password please wait some patient", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent:", info.messageId);
})();
    }
    else if(user.email = null){
        console.log('User not found')
            throw new error("User not found")
    }
    else {
        console.log("Email does not match, cannot proceed with password reset");
        throw new Error("Email does not match");
    }

}