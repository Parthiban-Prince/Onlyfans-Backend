import PostModel from "../schema/postSchema.js";


export async function createPost(data) {



    try{

        const Post = await PostModel.create(data)

        return Post


    }catch(error){
        throw error
    }

}


export async function postFindDatabse(id) {

    console.log(id)
    
    try{
        const Post = await PostModel.find({user:id}).populate('user')
        console.log(Post)
        return Post
    }catch(error){
        console.log(error)
    }
    
}

export async function AllpostFindDatabse(count = 1000) {
  try {
    const Post = await PostModel.aggregate([
      { $sample: { size: count } },

      // Project out unwanted fields from Post

      // Populate the 'user' field
      {
        $lookup: {
          from: 'users',
          localField: 'user',
          foreignField: '_id',
          as: 'user'
        }
      },

      // Unwind the populated user (since $lookup returns an array)
      { $unwind: '$user' },

      // Exclude sensitive fields from user object
      {
        $project: {
          'user.password': 0,
          'user.email': 0
        }
      }
    ]);

    return Post;
  } catch (error) {
    console.error(error);
    return [];
  }
}





export default{
    createPost,
    postFindDatabse,
    AllpostFindDatabse
}