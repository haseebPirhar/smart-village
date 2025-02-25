import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3005;
export const SERVER_URL = process.env.SERVER_URL || `http://localhost:${PORT}`;
export const MODE = process.env.MODE || "development";
export const DB_URI =
  process.env.DB_URI || "mongodb://localhost:27017/teilimDB";
export const SSL_KEY = process.env.SSL_KEY || "";
export const SSL_CRT = process.env.SSL_CRT || "";
export const JWT_SECRET = process.env.JWT_SECRET || "JWT_SECRET";


// sandgrid configuration
export const SENDGRID = {
  API_KEY: process.env.SENDGRID_API_KEY || "",
  EMAIL_FROM: process.env.MAIL_FROM || "",
};

// Gmail configuration
export const GMAIL = {
  USER: process.env.GMAIL_USER || "",
  PASS: process.env.GMAIL_PASS || "",
};

