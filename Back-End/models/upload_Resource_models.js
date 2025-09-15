import mongoose from "mongoose";

const uploadSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    selecttype: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    description: { type: String, required: true },
    photo: { type: String, required: true }
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const UploadModel = mongoose.model("UploadResource", uploadSchema);

export default UploadModel;
