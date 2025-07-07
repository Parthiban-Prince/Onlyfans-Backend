import { createPost } from "../Repository/postDatabse.js";

export async function postCreateService() {

    try{

            const Post = await createPost()
            return Post

    }catch(error){
        console.log(error)
    }

    
}

export default {
    postCreateService
}