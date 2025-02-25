import { Router } from "express";
import {
  createComplaint,
  deleteComplaint,
  getAllComplaints,
  updateComplaintStatus,
} from "@/controllers";

const router = Router();

// Create Complaint
router.post("/", (req, res, next) => {
  createComplaint(req, res).catch(next);
});
// Get All Complaints
router.get("/", (req, res, next) => {
  getAllComplaints(req, res).catch(next);
});
// Update Complaint Status
router.put("/:id", (req, res, next) => {
  updateComplaintStatus(req, res).catch(next);
});
// Delete Complaint
router.delete("/:id", (req, res, next) => {
  deleteComplaint(req, res).catch(next);
});
export { router as complaintsRoute };
