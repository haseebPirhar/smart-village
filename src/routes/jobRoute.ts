import { Router } from "express";

import { authMiddleware } from "@/middlewares";
import {
  // createJob,
  getJobs,
  // deleteJob,
  // getJobById,
  // updateJob,
} from "@/controllers/jobController";

const router = Router();

router.get("/", (req, res, next) => {
  getJobs(req, res).catch(next);
});

// router.get("/:id", (req, res, next) => {
//   getJobById(req, res).catch(next);
// });

// router.put("/:id", (req, res, next) => {
//   updateJob(req, res).catch(next);
// });

// router.delete("/:id", (req, res, next) => {
//   deleteJob(req, res).catch(next);
// });

// router.post("/", (req, res, next) => {
//   createJob(req, res).catch(next);
// });

export { router as jobRouter };
router.use(authMiddleware);
