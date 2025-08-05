import { verifyToken } from "../utils/jwtToken.js";
import {
  BookmarksService,
  addBookmarkService,
  removeBookmarkService,
} from "../service/BookmarkService.js";

export async function addBookmark(req, res) {
  try {
    const authHeader = req.headers.authorization;

    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const user = verifyToken(token);
    const username = user.username;
    const postBookmark = req.body.postId;

    const data = await addBookmarkService({ postBookmark, username });

    res.status(200).json({ success: true, message: "Bookmark added", data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function Bookmarks(req, res) {
  try {
    const authHeader = req.headers.authorization;

    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const user = verifyToken(token);
    const username = user.username;

    const data = await BookmarksService(username);

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export async function removeBookmark(req, res) {
  try {
    const authHeader = req.headers.authorization;

    const token = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    const user = verifyToken(token);
    const username = user.username;
    const postBookmark = req.body.postId;

    const data = await removeBookmarkService({ username, postBookmark });

    res.status(200).json({ success: true, message: "Bookmark removed", data });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

export default {
  removeBookmark,
  addBookmark,
  Bookmarks,
};
