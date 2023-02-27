import mongoose from "mongoose";

mongoose.set("strictQuery", true);
const connect = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGODB_URI);
    connection.readyState === 1
      ? console.log("Database connected!")
      : console.log("Database not connected");
  } catch (error) {
    return Promise.reject(error);
  }
};
export default connect;
