import { Router } from "express";

import {
  getWeather,
  // postWeather,
  // deleteWeather,
} from "@/controllers/weatherController";

import { authMiddleware } from "@/middlewares";

const router = Router();

router.get("/", (req, res, next) => {
  getWeather(req, res).catch(next);
});

// router.post("/",  (req, res, next) => {
//   postWeather(req, res).catch(next);
// });

// router.delete("/",(req, res, next) => {
//   deleteWeather(req, res).catch(next);
// });

export { router as weatherRoute };
