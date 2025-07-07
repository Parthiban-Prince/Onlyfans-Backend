import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  text: {
    type: String,
    maxlength: 2000
  },

  media: [
    {
      url: { type: String, required: true },
      type: { type: String, enum: ['image', 'video'], required: true }
    }
  ],

  isLocked: {
    type: Boolean,
    default: false // locked = paid content
  },

  tips: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      amount: { type: Number, min: 1 }
    }
  ],

  likes: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  ],

  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
      comment: { type: String },
      createdAt: { type: Date, default: Date.now }
    }
  ]
},{timestamps:true});


const PostModel = mongoose.model('Post',PostSchema)


export default PostModel