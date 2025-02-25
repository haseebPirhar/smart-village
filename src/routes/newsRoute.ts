import { Router } from "express";

// import { deleteNews } from "@/controllers/newsController";
// import { postNews } from "@/controllers/newsController";
import { getNews } from "@/controllers/newsController";

import { authMiddleware } from "@/middlewares";

const router = Router();

router.get("/", (req, res, next) => {
  getNews(req, res).catch(next);
});
// router.post("/", (req, res, next) => {
//   postNews(req, res).catch(next);
// });
// router.delete("/", (req, res, next) => {
//   deleteNews(req, res).catch(next);
// });

export { router as newsRoute };