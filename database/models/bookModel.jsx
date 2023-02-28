import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
    },
    ebook: {
      acquired: { type: Boolean },
      isbn: { type: String },
      price: { type: Number },
    },
    paperback: {
      acquired: { type: Boolean },
      isbn: { type: String },
      price: { type: Number },
    },
    hardcover: {
      acquired: { type: Boolean },
      isbn: { type: String },
      price: { type: Number },
    },
    imprint: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Imprint",
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.models.Book || mongoose.model("Book", bookSchema);

export default Book;
