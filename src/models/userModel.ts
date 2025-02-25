import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  username: string;
  password?: string;
}

interface IUserMethods {
  toJSON(): any;
}

type UserModel = Model<IUser, {}, IUserMethods>;

const userSchema = new mongoose.Schema<IUser, UserModel>(
  {
    email: {
      type: mongoose.Schema.Types.String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    username: {
      type: mongoose.Schema.Types.String,
      index: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: [true, "Password is required"],
      minlength: 6,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject({ versionKey: false });
  delete obj.password;
  return obj;
};

export const User = mongoose.model<IUser, UserModel>("User", userSchema);
