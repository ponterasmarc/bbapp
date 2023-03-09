import User from "../models/userModel";

// <--- GET ALL USER --->
export const getUsers = async (req, res) => {
  try {
    var pageNo = parseInt(req.query.pageNo);
    var size = parseInt(req.query.size);
    var uid = req.query.uid;
    var query = {};

    if (pageNo <= 0 || !pageNo) {
      pageNo = 1;
    }

    query.skip = size * (pageNo - 1);
    query.limit = size;

    //count entries
    const totalaEntries = await User.count({ _id: { $ne: uid } });

    const users = await User.find({ _id: { $ne: uid } }, {}, query);
    if (!users) {
      res.status(404).json({ error: "Users not found" });
    }
    const response = {
      count: totalaEntries,
      users,
    };
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

// <--- GET USER --->
export const getUser = async (req, res) => {
  const { userId } = req.query;
  try {
    const user = await User.findById(userId).populate("team role");
    if (!user) {
      res.status(404).json({ error: "User not found." });
    } else {
      res.status(201).json(user);
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({ error: "Error while fetching user." });
  }
};
``;
// <--- CREAT USER --->
export const postUser = async (req, res) => {
  try {
    const user = req.body;

    //check user if exists
    const userExists = await User.findOne({
      email: user.email,
    });
    if (userExists) {
      res.json({
        message: "User already exist!",
      });
    }

    User.create(user, function (err, newUser) {
      if (err) {
        res.status(400).json({ error: "Error in adding user" });
      } else {
        res.status(201).json({
          message: "User added successfully.",
          user: newUser,
        });
      }
    });
  } catch (error) {
    res.status(400).json({ error: "Error in adding user" });
  }
};

// <--- UPDATE USER --->
export const putUser = async (req, res) => {
  try {
    const user = req.body;
    const { userId } = req.query;
    if (userId && user) {
      User.findByIdAndUpdate(
        userId,
        user,
        { new: true },
        function (err, updatedUser) {
          if (err) {
            res.status(400).json({ error: "Error in updating the user" });
          } else if (!updatedUser) {
            res.status(401).json({
              error: "User not found.",
              user: updatedUser,
            });
          } else {
            res.status(200).json({
              message: "User updated successfully.",
              user: updatedUser,
            });
          }
        }
      );
    }
  } catch (error) {
    res.status(400).json({ error: "Error in updating the user" });
  }
};

// <--- DELETE USER --->
export const deleteUser = async (req, res) => {
  try {
    const { userId } = req.query;

    if (userId) {
      User.findByIdAndDelete(userId, function (err) {
        if (err) {
          res.status(400).json({ error: "Error in deleting the user" });
        } else {
          res.status(200).json({
            message: "User deleted successfully.",
          });
        }
      });
    }
  } catch (error) {
    res.status(404).json({ error: "Error in deleting the user" });
  }
};

// <--- GET SIGN IN USER --->
export const getSignedInUser = async (req, res) => {
  try {
    const { email } = req.body;
    const signedInUser = await User.findOne({ email });

    if (signedInUser) {
      res.status(200).json(signedInUser);
    }
  } catch (error) {
    res.status(404).json({ message: "Error while fetching data." });
  }
};
