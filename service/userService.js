import { verifyToken } from "../utils/jwtToken.js";
import {userDetailsDb,userDetailsUpdate} from '../Repository/userDatabse.js'

export  async function userDetailsService(token){

    const TokenDetails  = verifyToken(token)
    console.log(TokenDetails.username)

    const userDetails = await userDetailsDb(TokenDetails.username)
    return userDetails

}



export  async function userDetailsUpdateService(req){

    const authHeader = req.headers.authorization

    const token = authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader


    const TokenDetails  = verifyToken(token)


  


          const response = {
        oldusername : TokenDetails.username,
        username:req.body.username,
        name:req.body.name,
        Bio:req.body.Bio,
        profilePhoto: req.files.profilePhoto?.[0]?.path || null,
        coverPhoto: req.files.coverPhoto?.[0]?.path || null,
          };
        



    const userDetails = await userDetailsUpdate(response)


    return userDetails

}

export default {userDetailsService,userDetailsUpdateService}


