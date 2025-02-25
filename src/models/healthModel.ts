import mongoose, { Document, Schema } from "mongoose";

interface IHealthTip extends Document {
  title: string;
  description: string;
  category?: string;
  source?: string;
  publishedAt: Date;
}

const HealthTipSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  source: { type: String },
  publishedAt: { type: Date, default: Date.now },
});

interface IAvailability {
  day: string;
  time: string;
}

interface IDoctor extends Document {
  name: string;
  specialization: string;
  contact: string;
  availability?: IAvailability[];
  location: string;
}

const AvailabilitySchema: Schema = new Schema({
  day: { type: String, required: true },
  time: { type: String, required: true },
});

const DoctorSchema: Schema = new Schema({
  name: { type: String, required: true },
  specialization: { type: String, required: true },
  contact: { type: String, required: true },
  availability: [AvailabilitySchema],
  location: { type: String, required: true },
});


export default mongoose.models.HealthTip ||
  mongoose.model<IHealthTip>("HealthTip", HealthTipSchema);
