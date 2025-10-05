import mongoose from "mongoose";

const ChallengeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    stack: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TechStack",
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Medium",
    },
    assignedDate: { type: Date, default: Date.now },
    lastDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Challenge", ChallengeSchema);
// models/challenge.js
// This model represents a coding challenge that can be assigned to users.
// It includes fields for title, description, associated tech stack, difficulty level, assigned date, and last date.
