import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },

  captions: {
    type: String,
    maxlength: 2000
  },

  images:{
      type:String
    },
    media:{
      type:String
    },
    thumbnail:{
      type:String
    },
},{timestamps:true});


const PostModel = mongoose.model('Post',PostSchema)


export default PostModel