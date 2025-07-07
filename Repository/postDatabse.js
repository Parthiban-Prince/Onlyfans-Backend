import PostModel from "../schema/postSchema.js";


export async function createPost() {

    try{

        const Post = await PostModel.create()

        return Post


    }catch(error){
        throw error
    }

}



export default{
    createPost
}