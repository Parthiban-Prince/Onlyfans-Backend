import { verifyToken } from "../utils/jwtToken.js";
import {userDetailsDb,userDetailsUpdate} from '../Repository/userDatabse.js'

export  async function userDetailsService(token){

    const TokenDetails  = verifyToken(token)
    console.log(TokenDetails.username)

    const userDetails = await userDetailsDb(TokenDetails.username)
    return userDetails

}



export  async function userDetailsUpdateService(user){

    console.log(user)

    const TokenDetails  = verifyToken(user.token)

    const userDetails = await userDetailsUpdate(TokenDetails)


    return userDetails

}

export default {userDetailsService,userDetailsUpdateService}


