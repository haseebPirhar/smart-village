import { AUTH_CONFIG } from "@/constants/config";
import bcrypt from "bcrypt";

export const hashPassword = async (password?: string): Promise<string> => {
  if (!password) {
    throw new Error("Password is required");
  }
  if (password.length < AUTH_CONFIG.PASSWORD_MIN_LENGTH) {
    throw new Error(
      `Password must be at least ${AUTH_CONFIG.PASSWORD_MIN_LENGTH} characters long`
    );
  }
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const comparePasswords = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};

export default {
  hashPassword,
  comparePasswords,
};
