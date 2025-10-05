import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: String,
    assignedDate: { type: Date, default: Date.now },
    lastDate: Date,
    submittedDate: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
// models/Task.js
// This model represents a task that can be assigned to users.
// It includes fields for title, description, assigned date, last date, and submitted date.
