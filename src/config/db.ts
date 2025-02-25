import mongoose from "mongoose";
import { DB_URI } from "@/constants/env";
import { LOGUI } from "@/constants/logs";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    mongoose.set("useFindAndModify", false);
    console.log(LOGUI.FgGreen, `MongoDB connected successfully [${DB_URI}]`);
  } catch (error) {
    console.error(LOGUI.FgRed, `MongoDB connection error ${error}`);
    process.exit(1);
  }
};

export { connectDB };
