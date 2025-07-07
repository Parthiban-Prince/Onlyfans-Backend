import jwt from 'jsonwebtoken'
import { generateToken, verifyToken } from '../utils/jwtToken.js'
import { generateFromEmail } from 'unique-username-generator'
import {userDatabasecreate,userDatafind }from '../Repository/userDatabse.js'
import bcrypt from 'bcrypt'


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


        const Password = await bcrypt.compareSync(userDetails.password,user.password)

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

        const token =  generateToken(userToken)
        console.log(token)
        
        return token
        
    }catch(error){
        throw error
    }




}