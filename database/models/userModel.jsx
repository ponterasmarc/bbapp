import mongoose from "mongoose";
import Team from "./teamModel";
import Role from "./roleModel";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    isAdmin: {
      type: Boolean,
    },
    isLeader: {
      type: Boolean,
      default: false,
    },
    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
