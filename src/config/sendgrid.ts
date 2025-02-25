import sendgrid from "@sendgrid/mail";
import { SENDGRID } from "@/constants/env";
import { LOGUI } from "@/constants/logs";

if (SENDGRID.API_KEY) {
  sendgrid.setApiKey(SENDGRID.API_KEY);
} else {
  console.log(LOGUI.FgRed, "Sendgrid API key not provided");
}

export { sendgrid };
