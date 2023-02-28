import mongoose from "mongoose";

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
