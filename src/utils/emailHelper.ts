import { transporter } from "@/config/gmail";
import { sendgrid } from "@/config/sendgrid";
import { SENDGRID, MODE } from "@/constants/env";

interface IMailInfo {
  to: string;
  subject: string;
  html: string;
}

export const sendEmail = async (mailInfo: IMailInfo) => {
  try {
    // await sendgrid.send({ ...mailInfo, from: SENDGRID.EMAIL_FROM });
    await transporter.sendMail({
      ...mailInfo,
      from: `"PetzApp" <${process.env.GMAIL_USER}>`,
    });
  } catch (error) {
    throw Error(error as any);
  }
};
