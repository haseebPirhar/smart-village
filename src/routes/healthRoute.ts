import { Router } from "express";
import {
  getHealth,
  // postHealth,
  // deleteHealth,
  // updateHealth,
} from "@/controllers/healthController";

import { authMiddleware } from "@/middlewares";

const router = Router();

router.get("/", (req, res, next) => {
  getHealth(req, res).catch(next);
});
// router.post("/", (req, res, next) => {
//   postHealth(req, res).catch(next);
// });
// router.delete("/", (req, res, next) => {
//   deleteHealth(req, res).catch(next);
// });
// router.put("/", (req, res, next) => {
//   updateHealth(req, res).catch(next);
// });

export { router as healthRoute };
