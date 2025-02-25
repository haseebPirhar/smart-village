import { Router } from "express";
import { getAgriculture, getAllTechniques } from "@/controllers/agricultureController";


const router = Router();

router.get("/", (req, res, next) => {
  getAgriculture(req, res).catch(next);
});

router.get("/farming", (req, res, next) => {
  getAllTechniques(req, res).catch(next);
});


export { router as agricultureRoute };