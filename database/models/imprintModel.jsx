import mongoose from "mongoose";

const imprintSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    logo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Imprint =
  mongoose.models.Imprint || mongoose.model("Imprint", imprintSchema);

export default Imprint;
