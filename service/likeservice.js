import LikeModel from '../schema/likesSchema.js'

export const likePost = async (postId, userId) => {
  const existing = await LikeModel.findOne({ post: postId, user: userId });
  if (existing) {
    await LikeModel.deleteOne({ _id: existing._id });
    return { liked: false };
  } else {
    await LikeModel.create({ post: postId, user: userId });
    return { liked: true };
  }
};

export const getLikesForPost = async (postId) => {
  return await LikeModel.find({ post: postId }).populate('user', '-password');
};

export const getLikeCount = async (postId) => {
  return await LikeModel.countDocuments({ post: postId });
};

export const hasUserLikedPost = async (postId, userId) => {
  return await LikeModel.exists({ post: postId, user: userId });
};
