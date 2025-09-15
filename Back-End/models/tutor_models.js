import mongoose from "mongoose";

const tutorSchema = new mongoose.Schema(
  {
    tutorId: { type: String, required: true, unique: true }, // ✅ matches frontend (tutorId)
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true }, // ✅ keep as string (to allow 10-digit numbers easily)
    experience: { type: String, required: true },
    qualification: { type: String, required: true },
    skill: { type: String, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    standard: { type: String, required: true }, // ✅ lowercase "standard"
    board: { type: [String], required: true }   // ✅ array of strings (CBSE, ICSE, UP, etc.)
  },
  { timestamps: true }
);

const TutorModel = mongoose.model("Tutor", tutorSchema);

export default TutorModel;
