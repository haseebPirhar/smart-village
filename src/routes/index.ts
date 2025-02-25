import express from "express";

import { authRoutes } from "./authRoutes";
import { weatherRoute } from "./weatherRoute";
import { newsRoute } from "./newsRoute";
import { agricultureRoute } from "./agricultureRoute";
import { healthRoute } from "./healthRoute";
import { jobRouter } from "./jobRoute"
import { complaintsRoute } from "./complaintsRoute";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.json({ message: "Welcome to the Smart Village API" });
});

routes.use("/api/auth", authRoutes);
routes.use("/api/weather", weatherRoute);
routes.use("/api/news", newsRoute);
routes.use("/api/agriculture", agricultureRoute);
routes.use("/api/health", healthRoute);
routes.use("/api/job", jobRouter);
routes.use("/api/complaints", complaintsRoute);
export { routes };
