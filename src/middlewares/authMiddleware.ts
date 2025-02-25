import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@/constants/env";
import { User } from "@/models/userModel";
import { statusCodes } from "@/constants/statusCodes";

interface JwtPayload {
  id: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      res
        .status(statusCodes.UNAUTHORIZED)
        .json({ message: "Access denied. No token provided." });
      return;
    }

    const decoded = jwt.verify(token, JWT_SECRET as string) as JwtPayload;
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      throw Error("User not found");
    }

    req.user = user;
    next();
  } catch (error) {
    res
      .status(statusCodes.BAD_REQUEST)
      .json({ message: "Invalid token.", error });
  }
};
