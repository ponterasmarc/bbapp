import User from "@/models/user";

// <--- GET ALL USERS --->
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    if (!users) {
      res.status(404).json({ error: "Users not found" });
    }

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

// <--- GET SINGLE USER --->
const getUser = async (req, res) => {
  const { userId } = req.query;
  try {
    const user = await User.findById(userId);

    if (!user) {
      res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

// <--- CREAT USER --->
const postUser = async (req, res) => {
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
const putUser = async (req, res) => {
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
const deleteUser = async (req, res) => {
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
export { getUsers, postUser, putUser, getUser, deleteUser };
