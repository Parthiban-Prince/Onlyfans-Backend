import { createPost,postFindDatabse,AllpostFindDatabse } from "../Repository/postDatabse.js";

export async function postCreateService(Post) {


   
    const postDetails = {
        user:Post.user._id,
        images:Post.file.path,
        captions:Post.body.captions
    }


    try{

            const Post = await createPost(postDetails)
            console.log(Post)
            return Post

    }catch(error){
        console.log(error)
    }

    
}

export async function postFindService(id) {

    console.log(id)

    try{
        const allPosts = await postFindDatabse(id)
        return allPosts
    }
    catch(error){
        console.log(error)
    }
    
}

export async function AllpostFindService() {


    try{
        const allPosts = await AllpostFindDatabse()
        return allPosts
    }
    catch(error){
        console.log(error)
    }
    
}



export default {
    postCreateService,
    postFindService,
    AllpostFindService
}