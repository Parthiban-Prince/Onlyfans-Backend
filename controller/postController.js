import {postService} from "../service/postService.js";


export async function postController() {

    try{

        const Post = await postService()
        return res.status(200).json({
            message:"success",
            data:Post
        })

    }catch(error){
        console.log(error)
    }
    
}