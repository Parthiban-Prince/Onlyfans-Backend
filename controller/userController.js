import {userDetailsService,userDetailsUpdateService,publicService }from '../service/userService.js'

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




 
    const user = await userDetailsUpdateService(req)


    return res.status(200).json({
        message:"Recevied data",
        data:user
    })

}


export  async function publicController(req,res){


    const path  = req.path

    

    const name1 = path.startsWith('/') ? path.slice(1):path

    const name = name1.toLowerCase()
    console.log(name)


 
    const user = await publicService(name)
 


  return res.status(200).json({
      message:"Recevied data",
       data:user
    })

}







export default {userDetails,userDetailsPost,publicController }

