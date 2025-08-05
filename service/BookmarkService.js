import { 
  addBookmarkDatabase, 
  getBookmarksDatabase, 
  removeBookmarkDatabase 
} from "../Repository/BookmarkDatabase.js";

export async function addBookmarkService(data) {
  try {
    const response = await addBookmarkDatabase(data);
    return response;
  } catch (error) {
    throw new Error("Failed to add bookmark: " + error.message);
  }
}

export async function BookmarksService(username) {
  try {
    const bookmarks = await getBookmarksDatabase(username);
    return bookmarks;
  } catch (error) {
    throw new Error("Failed to fetch bookmarks: " + error.message);
  }
}

export async function removeBookmarkService(data) {
  try {
    const response = await removeBookmarkDatabase(data);
    return response;
  } catch (error) {
    throw new Error("Failed to remove bookmark: " + error.message);
  }
}

export default {
  addBookmarkService,
  removeBookmarkService,
  BookmarksService,
};
