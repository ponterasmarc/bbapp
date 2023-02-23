import User from "@/model/userModel";

export const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};
