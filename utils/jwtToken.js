import jwt from 'jsonwebtoken'
import {JWT_SECRET_KEY} from '../config/serverConfig.js'


export const  generateToken = (payload)=>{
    return jwt.sign(payload,JWT_SECRET_KEY,{expiresIn:"10d"})

}

export const verifyToken = (token)=>{
    
   return jwt.verify(token,JWT_SECRET_KEY)
}

export const decodeToken = (token)=>{jwt.decode(token,JWT_SECRET_KEY)}

export default{

    generateToken,
    verifyToken,
    decodeToken

}