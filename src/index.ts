import { server } from "./server";
import { connectDB } from "@/config/db";
// import { setupSocket } from "@/config/socket";
import { PORT } from "@/constants/env";
import { LOGUI } from "@/constants/logs";

// Database setup
connectDB();

// Socket setup
// const io = setupSocket(server);
// console.log(io.sockets.sockets.size);    // Log active socket connections

// Server setup
const port: number = parseInt(PORT as string, 10) || 4000;
server.listen(port, () => {
  console.error(LOGUI.FgYellow, `Serving on port ${port}`);
});

server.on("error", (error: NodeJS.ErrnoException) => {
  console.error(LOGUI.FgRed, error);
});
