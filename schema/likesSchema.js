import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    }
  },
  { timestamps: true }
);

likeSchema.index({ post: 1, user: 1 }, { unique: true });

export const LikeModel = mongoose.model('Like', likeSchema);

export default LikeModel