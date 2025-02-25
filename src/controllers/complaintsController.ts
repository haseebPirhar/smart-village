import { Complaint } from "@/models/complaintsModel";
import { Request, Response } from "express";

const createComplaint = async (req: Request, res: Response) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.status(201).json(complaint);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const getAllComplaints = async (req: Request, res: Response) => {
  try {
    const complaints = await Complaint.find();
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

const updateComplaintStatus = async (req: Request, res: Response) => {
  try {
    const complaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body
    );

    if (!complaint)
      return res.status(404).json({ error: "Complaint not found" });
    await complaint.save();
    res.json({ message: "Complaint updated successfully", complaint });
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

const deleteComplaint = async (req: Request, res: Response) => {
  try {
    const complaint = await Complaint.findByIdAndDelete(req.params.id);
    if (!complaint)
      return res.status(404).json({ error: "Complaint not found" });
    res.json({ message: "Complaint deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
};

export {
  createComplaint,
  getAllComplaints,
  updateComplaintStatus,
  deleteComplaint,
};
