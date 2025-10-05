import mongoose from "mongoose";

const WorkspaceSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    currentTask: { type: mongoose.Schema.Types.ObjectId, ref: "Task" },
    codeFiles: [
      {
        fileName: String,
        code: String,
        lastModified: { type: Date, default: Date.now },
      },
    ],
    gitRepoUrl: String,
  },
  { timestamps: true }
);

export default mongoose.model("Workspace", WorkspaceSchema);
// models/Workspace.js
// This model represents a user's workspace, which includes their current task,
// code files, and optional Git repository URL. It allows users to manage their coding environment
// and track changes to their code files. The workspace is linked to a specific user.
