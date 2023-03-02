import Book from "../models/bookModel";

// <--- GET ALL BOOK --->
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});

    if (!books) {
      res.status(404).json({ error: "Books not found" });
    }

    res.status(200).json(books);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching books." });
  }
};

// <--- GET BOOK --->
export const getBook = async (req, res) => {
  const { bookId } = req.query;
  try {
    const book = await Book.findById(bookId);

    if (!book) {
      res.status(404).json({ error: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching book." });
  }
};

// <--- CREATE BOOK --->
export const postBook = async (req, res) => {
  try {
    const book = req.body;

    Book.create(book, function (err, newBook) {
      if (err) {
        res.status(400).json({ error: "Error in adding book" });
      } else {
        res.status(201).json({
          message: "Book added successfully.",
          book: newBook,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding book" });
  }
};

// <--- UPDATE BOOK --->
export const putBook = async (req, res) => {
  try {
    const book = req.body;
    const { bookId } = req.query;
    if (book && bookId) {
      Book.findByIdAndUpdate(
        bookId,
        book,
        { new: true },
        function (err, updatedBook) {
          if (err) {
            res.status(400).json({ error: "Error in updating the book" });
          } else {
            res.status(200).json({
              message: "Book updated successfully.",
              book: updatedBook,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({ error: "Error in updating the book" });
  }
};

// <--- DELETE BOOK --->
export const deleteBook = async (req, res) => {
  try {
    const { bookId } = req.query;

    if (bookId) {
      Book.findByIdAndDelete(bookId, function (err) {
        if (err) {
          res.status(400).json({ error: "Error in deleting the book" });
        } else {
          res.status(200).json({
            message: "Book deleted successfully.",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Error in deleting the book" });
  }
};
