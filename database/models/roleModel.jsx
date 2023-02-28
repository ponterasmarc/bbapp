import mongoose from "mongoose";

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    task: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.models.Role || mongoose.model("Role", roleSchema);

export default Role;
