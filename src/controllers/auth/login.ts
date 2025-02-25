import { Request, Response } from "express";
import { statusCodes } from "@/constants/statusCodes";
import { User, IUser } from "@/models/userModel";
import { comparePasswords } from "@/utils/passwordHelper";
import { generateToken } from "@/utils/jwtHelper";
import userService from "@/services/userService";

interface LoginRequest {
  email: string;
  password: string;
  device?: string;
  platform: string;
}

export const login = async (
  req: Request<{}, {}, LoginRequest>,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user?.password) {
      return res
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: "Invalid credentials" });
    }

    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) {
      return res
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: "Invalid credentials" });
    }

    const token = generateToken({ id: user._id });
    const userObj = sanitizeUser(user);

    return res.status(statusCodes.OK).json({
      message: "'Login successful. Welcome to the App. 😀🎊 !",
      data: { ...userObj, token },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res
      .status(statusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Error logging in" });
  }
};

const sanitizeUser = (user: IUser) => {
  const userObj = user.toObject();
  delete userObj.password;
  delete userObj.__v;
  return userObj;
};
