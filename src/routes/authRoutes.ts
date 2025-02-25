import { Router } from "express";
import { fileHelper } from "@/utils";

import {
  register,
  login,
  logout,
} from "@/controllers";
import { authMiddleware } from "@/middlewares";

const uploadHandler = fileHelper
  .uploadFile("./uploads/profiles")
  .single("image");
const router = Router();

router.post("/register", (req, res, next) => {
  register(req, res).catch(next);
});
router.post("/login", (req, res, next) => {
  login(req, res).catch(next);
});
router.post("/logout", authMiddleware, (req, res, next) => {
  logout(req, res).catch(next);
});

export { router as authRoutes };
