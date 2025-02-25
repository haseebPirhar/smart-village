import mongoose, { Document, Model } from "mongoose";

export interface job extends Document {
  title: string;
  contact: string;
  description: string;
  publishedAt: Date;
  updatedAt?: Date;
}

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const job = mongoose.model("job", jobSchema);
