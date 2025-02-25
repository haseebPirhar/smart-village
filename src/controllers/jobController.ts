import { Request, Response } from "express";
import { job } from "../models/jobModel";
import axios from "axios";

const { NewsAPI_KEY } = process.env;
const BASE_URL = "https://remoteok.io/api ";

// Create a new job
// export const createJob = async (req: Request, res: Response) => {
//   try {
//     const { title, description } = req.body;
//     const response = await axios.get(
//       `${BASE_URL}&title=${title}&description=${description}`
//     );
//     if (!response) {
//       res.status(400).json({ message: "No news data found" });
//     }
//     return res.status(201).json({
//       message: "Data successfully retrieved",
//       data: response.data,
//     });
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };
// Get all jobs
export const getJobs = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.query; // Use query params instead of body

    const apiUrl = `${BASE_URL}?title=${title || ""}&description=${description || ""}`;

    const response = await axios.get(apiUrl);

    if (!response.data || response.data.length === 0) {
      return res.status(404).json({ message: "No jobs found", data: [] });
    }

    return res.status(200).json({
      message: "Jobs retrieved successfully",
      data: response.data,
    });
  } catch (error) {
    console.error("Error fetching jobs:", error);
    res.status(500).json({ message: "Error retrieving jobs", error: (error as Error).message });
  }
};


// // Get a single job by ID
// export const getJobById = async (req: Request, res: Response) => {
//   try {
//     const foundJob = await job.findById(req.params.id);
//     if (!foundJob) {
//       return res.status(404).json({ message: "Job not found" });
//     }
//     res.status(200).json(foundJob);
//   } catch (error) {
//     res.status(500).json({ message: (error as Error).message });
//   }
// };

// // Update a job by ID
// export const updateJob = async (req: Request, res: Response) => {
//   try {
//     const updatedJob = await job.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//       runValidators: true,
//     });
//     if (!updatedJob) {
//       return res.status(404).json({ message: "Job not found" });
//     }
//     res.status(200).json(updatedJob);
//   } catch (error) {
//     res.status(400).json({ message: (error as Error).message });
//   }
// };

// // Delete a job by ID
// export const deleteJob = async (req: Request, res: Response) => {
//   try {
//     const deletedJob = await job.findByIdAndDelete(req.params.id);
//     if (!deletedJob) {
//       return res.status(404).json({ message: "Job not found" });
//     }
//     res.status(200).json({ message: "Job deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: (error as Error).message });
//   }
// };
