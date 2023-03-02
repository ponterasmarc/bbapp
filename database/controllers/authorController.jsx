import Author from "../models/authorModel";

// <--- GET ALL AUTHOR --->
export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find({});

    if (!authors) {
      res.status(404).json({ error: "Authors not found" });
    }

    res.status(200).json(authors);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching authors." });
  }
};

// <--- GET AUTHOR --->
export const getAuthor = async (req, res) => {
  const { authorId } = req.query;
  try {
    const author = await Author.findById(authorId);

    if (!author) {
      res.status(404).json({ error: "Author not found" });
    }

    res.status(200).json(author);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching author." });
  }
};

// <--- CREATE AUTHOR --->
export const postAuthor = async (req, res) => {
  try {
    const author = req.body;

    Author.create(author, function (err, newAuthor) {
      if (err) {
        res.status(400).json({ error: "Error in adding author" });
      } else {
        res.status(201).json({
          message: "Author added successfully.",
          author: newAuthor,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding author" });
  }
};

// <--- UPDATE AUTHOR --->
export const putAuthor = async (req, res) => {
  try {
    const author = req.body;
    const { authorId } = req.query;
    if (author && authorId) {
      Author.findByIdAndUpdate(
        authorId,
        author,
        { new: true },
        function (err, updatedAuthor) {
          if (err) {
            res.status(400).json({ error: "Error in updating the author" });
          } else {
            res.status(200).json({
              message: "Author updated successfully.",
              author: updatedAuthor,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({ error: "Error in updating the author" });
  }
};

// <--- DELETE AUTHOR --->
export const deleteAuthor = async (req, res) => {
  try {
    const { authorId } = req.query;

    if (authorId) {
      Author.findByIdAndDelete(authorId, function (err) {
        if (err) {
          res.status(400).json({ error: "Error in deleting the author" });
        } else {
          res.status(200).json({
            message: "Author deleted successfully.",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Error in deleting the author" });
  }
};
