import mongoose from "mongoose";

const BookMarkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true
  },
  post: {
    type: String, // e.g., title or slug (optional)
  }
}, { timestamps: true });

const BookMarkModel = mongoose.model('Bookmark', BookMarkSchema); // singular model name preferred

export default BookMarkModel;
