import nodemailer from "nodemailer";
import { GMAIL } from "@/constants/env";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: GMAIL.USER,
    pass: GMAIL.PASS,
  },
});

export { transporter };
