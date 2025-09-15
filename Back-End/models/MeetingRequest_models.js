import mongoose from "mongoose";

const MeetingRequestSchema = new mongoose.Schema(
  {
    Tutor_id: { type: String, required: true },
    User_id: { type: String, required: true },
    Questions: { type: String, required: true },
    Answer: { type: String, default: null }
  },
  { timestamps: true } // adds createdAt and updatedAt
);

const MeetingRequest = mongoose.model("MeetingRequest", MeetingRequestSchema);

export default MeetingRequest;
