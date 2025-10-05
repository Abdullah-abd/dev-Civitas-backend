import mongoose from "mongoose";

const TechStackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    badges: [{ type: String }], // internal badges for the stack
  },
  { timestamps: true }
);

export default mongoose.model("TechStack", TechStackSchema);
// models/TechStack.js

// This model represents a technology stack that can be associated with users.
// It includes fields for the name, description, and badges related to the tech stack.
