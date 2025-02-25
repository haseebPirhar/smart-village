import { Request, Response } from "express";

import { statusCodes } from "@/constants/statusCodes";
import { IUser, User } from "@/models";
import { hashPassword } from "@/utils/passwordHelper";
export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { email, password, username }: IUser = req.body;

    if (!email || !password) {
      return res
        .status(statusCodes.BAD_REQUEST)
        .json({ message: "Please provide all required fields" });
    }
    const hashedPassword = await hashPassword(password);

    const user = new User({
      email,
      password: hashedPassword,
      username,
      type: "TempUser",
    });
    await user.save();
    return res
      .status(statusCodes.CREATED)
      .json({ message: "User has been registered" });
  } catch (error: any) {
    if (error?.code === 11000) {
      return res.status(statusCodes.FORBIDDEN).json({
        message: "Duplicate User Error",
        ...error.keyValue,
      });
    }

    return res.status(statusCodes.FORBIDDEN).json({
      message: error.message || "Error while registering",
      error,
    });
  }
};
