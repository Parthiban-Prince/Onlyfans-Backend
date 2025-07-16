import PostModel from "../schema/postSchema.js";
import likesSchema from "../schema/likesSchema.js";



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


export async function ownerPostFindDatabse(id) {
  try {
    console.log("Fetching latest posts for user ID:", id);

    const posts = await PostModel.find({ user: id,thumbnail:{$ne:null} })
      .select('media thumbnail')                   // Only return media & thumbnail
      .populate('user', '-password')               // Populate user without password
      .sort({ createdAt: -1 })                     // Sort by latest
      .limit(4);                                   // Limit to 4 posts

    console.log(posts);
    return posts;
  } catch (error) {
    console.error("Error fetching user posts:", error);
    return [];
  }
}


// Retrieve a post by its ID
export const findPostById = async (postId) => {
  return await likesSchema.findById(postId).populate('Post');
};

// Update the likes array for a post
export const updatePostLikes = async (postId, likesArray) => {
  return await likesSchema.findByIdAndUpdate(
    postId,
    { likes: likesArray },
    { new: true }
  );
};



export default{
    createPost,
    postFindDatabse,
    AllpostFindDatabse,
    ownerPostFindDatabse,
    findPostById,
    updatePostLikes,

}