import BookMarkModel from "../schema/Bookmarks.js";
import UserModel from '../schema/userSchema.js';

export async function addBookmarkDatabase({ username, postBookmark }) {
  try {
    const user = await UserModel.findOne({ username });
    if (!user) throw new Error("User not found");

    const existing = await BookMarkModel.findOne({
      user: user._id,
      postId: postBookmark,
    });

    if (existing) {
      return { message: "Bookmark already exists", exists: true };
    }

    const bookmark = await BookMarkModel.create({
      user: user._id,
      postId: postBookmark,
    });

    return bookmark;
  } catch (error) {
    console.error("Error creating bookmark:", error.message);
    throw error;
  }
}

export async function getBookmarksDatabase(username) {
  try {
    const user = await UserModel.findOne({ username });
    if (!user) throw new Error("User not found");

    const bookmarks = await BookMarkModel.find({ user: user._id }).populate("postId"); // optional populate

    return bookmarks;
  } catch (error) {
    console.error("Error fetching bookmarks:", error.message);
    throw error;
  }
}

export async function removeBookmarkDatabase({ username, postBookmark }) {
  try {
    const user = await UserModel.findOne({ username });
    if (!user) throw new Error("User not found");

    const removed = await BookMarkModel.findOneAndDelete({
      user: user._id,
      postId: postBookmark,
    });

    return removed;
  } catch (error) {
    console.error("Error removing bookmark:", error.message);
    throw error;
  }
}

export default {
  addBookmarkDatabase,
  getBookmarksDatabase,
  removeBookmarkDatabase,
};
