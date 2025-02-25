import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: { type: String, required: true },
    status: {
      type: String,
      default: "Pending",
    },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

export const Complaint = mongoose.model("Complaint", complaintSchema);

