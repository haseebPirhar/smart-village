import { createServer as createHttpServer } from "http";
import { MODE } from "@/constants/env";
import app from "./app";
import { LOGUI } from "@/constants/logs";

const createServer = () => {
  console.log(LOGUI.FgGreen, `Creating server... ${MODE} mode`);
  return createHttpServer(app);
};

const server = createServer();
export { server };


  import cors from 'cors';
app.use(cors());
