import {postCreateService, postFindService,AllpostFindService} from '../service/postService.js'

export async function postController(req,res) {


    try{

        const Post = await postCreateService(req)



        return res.status(200).json({
            message:"success",
            data:Post
        })

    }catch(error){
        console.log(error)
    }
    
}

export async function postFindcontroller(req,res) {

    const id = req.user._id



        try{

        const Post = await postFindService(id)



        return res.status(200).json({
            message:"success",
            data:Post
        })

    }catch(error){
        console.log(error)
    }
    
    
}


export async function AllpostFindcontroller(req,res) {

 

        try{

        const Post = await AllpostFindService()



        return res.status(200).json({
            message:"success",
            data:Post
        })

    }catch(error){
        console.log(error)
    }
    
    
}


export default {postController,postFindcontroller,AllpostFindcontroller}