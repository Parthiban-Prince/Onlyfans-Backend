import {
  likePost,
  getLikesForPost,
  getLikeCount,
  hasUserLikedPost,
} from '../service/likeservice.js';

export const toggleLikeController = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user._id; // assuming user ID is in req.user from auth middleware

  try {
    const result = await likePost(postId, userId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to like/unlike post' });
  }
};

export const getPostLikesController = async (req, res) => {
  const { postId } = req.params;

  try {
    const likes = await getLikesForPost(postId);
    res.json(likes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch likes' });
  }
};

export const getPostLikeCountController = async (req, res) => {
  const { postId } = req.params;

  try {
    const count = await getLikeCount(postId);
    res.json({ likeCount: count });
  } catch (err) {
    res.status(500).json({ error: 'Failed to count likes' });
  }
};

export const checkUserLikeController = async (req, res) => {
  const { postId } = req.params;
  const userId = req.user._id;

  try {
    const liked = await hasUserLikedPost(postId, userId);
    res.json({ liked: !!liked });
  } catch (err) {
    res.status(500).json({ error: 'Failed to check like status' });
  }
};
