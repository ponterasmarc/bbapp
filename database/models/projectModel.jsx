import mongoose from "mongoose";
import Task from "./taskModel";
import User from "./userModel";
import Book from "./taskModel";
import Author from "./authorModel";

const projectSchema = new mongoose.Schema(
  {
    task: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
    assignee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
    status: {
      type: String,
    },
    notes: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
