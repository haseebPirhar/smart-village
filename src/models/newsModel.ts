import mongoose, { Document, Model } from "mongoose";

export interface INews extends Document {
  title: string;
  content: string;
  imageUrl?: string;
  author: string;
  publishedAt: Date;
  updatedAt?: Date;
}

const newsSchema = new mongoose.Schema<INews>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String },
    author: { type: String, required: true },
    publishedAt: { type: Date, default: Date.now },
    updatedAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

export const News = mongoose.model<INews>("News", newsSchema);