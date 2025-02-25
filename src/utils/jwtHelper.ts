import { AUTH_CONFIG } from "@/constants/config";
import { JWT_SECRET } from "@/constants/env";
import jwt from "jsonwebtoken";

interface UserPayload {
  id: string;
}

export const generateToken = (
  user: UserPayload,
  expiresIn: string = AUTH_CONFIG.JWT_EXPIRES_IN
): string => {
  return jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn,
  });
};
