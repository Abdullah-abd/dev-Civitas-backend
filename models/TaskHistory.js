import mongoose from "mongoose";

const TaskHistorySchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    task: { type: mongoose.Schema.Types.ObjectId, ref: "Task", required: true },
    challenge: { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" },
    submissionCode: String,
    submittedAt: Date,
    status: {
      type: String,
      enum: ["Pending", "Completed", "Reviewed"],
      default: "Pending",
    },
    aiSuggestions: [
      {
        suggestion: String,
        providedAt: { type: Date, default: Date.now },
        used: { type: Boolean, default: false },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("TaskHistory", TaskHistorySchema);
// models/TaskHistory.js
// This model tracks the history of tasks assigned to users, including submissions,
// challenges, and AI suggestions. It allows for tracking user progress and task completion status.
