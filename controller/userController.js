import {userDetailsService,userDetailsUpdateService }from '../service/userService.js'

export  async function userDetails(req,res){

    const authHeader = req.headers.authorization

      const token = authHeader.startsWith('Bearer ')
    ? authHeader.split(' ')[1]
    : authHeader;


    const user = await userDetailsService(token)

    return res.status(200).json({
        message:"Recevied data",
        data:user
    })

}


export  async function userDetailsPost(req,res){

 
    const user = await userDetailsUpdateService(req.body)

    return res.status(200).json({
        message:"Recevied data",
        data:user
    })

}

export default {userDetails,userDetailsPost }

