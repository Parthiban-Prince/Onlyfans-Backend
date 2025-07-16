import {postCreateService, postFindService,AllpostFindService,ownerPostFindService,handleToggleLike} from '../service/postService.js'

export async function postController(req,res) {


  try {
    const post = await postCreateService({
      body: req.body,
      user: req.user,
      files: req.files,
    });

    return res.status(200).json({ success: true, post });
  } catch (err) {
    console.error("❌ Post creation error:", err);
    return res.status(500).json({ success: false, message: "Post creation failed" });
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




export async function ownerPostFindcontroller(req,res) {

    const id = "686df5f711a4115c6911c86c"



        try{

        const Post = await ownerPostFindService(id)



        return res.status(200).json({
            message:"success",
            data:Post
        })

    }catch(error){
        console.log(error)
    }
    
    
}


export const toggleLike = async (req, res) => {
  const post =  req.params.postId

  const postid = post.slice(7)

  console.log(req.user.id)
  try {
    const result = await handleToggleLike(postid, req.user.id);
    res.status(200).json(result);
  } catch (error) {
    console.error("Toggle like error:", error);
    res.status(500).json({ message: error.message || 'Server Error' });
  }
};


export default {postController,postFindcontroller,AllpostFindcontroller,ownerPostFindcontroller,toggleLike}