import {verifyToken} from "./jwtToken.js"


export async function Authencation(req,res,next) {

    try{

        const authHeader =   console.log(req.headers.authorization)

        const token = authHeader.startWith('Bearer')?authHeader.split('')[1]:authHeader;

        

        const verification = verifyToken(token)




    }catch(error){
        console.log(error)
    }
    
}