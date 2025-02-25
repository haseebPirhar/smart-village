import { Request, Response } from "express";
import { statusCodes } from "@/constants/statusCodes";

import userService from "@/services/userService";
import { IUser } from "@/models";

export const logout = async (
  req: Request,
  res: Response
): Promise<Response> => {
try {
  const user = req.user as IUser;
  await userService.Logout(user as any);
  return res.status(statusCodes.OK).json({
    message: "Logged out successfully",
  });
} catch (error) {
  return res.status(statusCodes.INTERNAL_SERVER_ERROR).json({
    message: "Internal server error",
    error: (error instanceof Error) ? error.message : 'Unknown error',
  });
}
};
