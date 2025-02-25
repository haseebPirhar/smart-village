import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const AgricultureAPI_KEY = process.env.AgricultureAPI_KEY;
const BASE_URL =
  "https://odphp.health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=527";

export const getHealth = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const response = await axios.get(
      `${BASE_URL}&title=${title}&description=${description}`
    );
    if (!response) {
      res.status(400).json({ message: "No news data found" });
    }
    return res.status(201).json({
      message: "Data successfully retrieved",
      data: response.data,
    });
  } catch (error: any) {
    console.error("Error saving agriculture data:", error.message);
    return res.status(500).json({
      message: "Successfull save",
      error: error.message,
    });
  }
};

// export const postHealth = async (req: Request, res: Response) => {
//   try {
//     const { country = "pak", category = "all", title, description } = req.body;
//     const response = await axios.get(
//       `${BASE_URL}&title=${title}&description=${description}`
//     );
//     if (!response) {
//       return res.status(404).json({ message: "No news data found" });
//     }
//     return res.status(201).json({
//       message: "Data fetch successfully",
//     });
//   } catch (error: any) {
//     console.error("Error posting health data:", error.message);
//     return res.status(500).json({
//       message: "Failed to save data",
//       error: error.message,
//     });
//   }
// };
// export const updateHealth = async (req: Request, res: Response) => {
//   try {
//     const { id, title, description } = req.body;

//     if (!id) {
//       return res.status(400).json({ message: "ID is required to update data" });
//     }

//     const response = await axios.put(`${BASE_URL}/${id}`, {
//       title,
//       description,
//     });

//     if (!response.data) {
//       return res.status(404).json({ message: "No data found to update" });
//     }

//     return res.status(200).json({
//       message: "Data successfully updated",
//       data: response.data,
//     });
//   } catch (error: any) {
//     console.error("Error updating health data:", error.message);
//     return res.status(500).json({
//       message: "Failed to update data",
//       error: error.message,
//     });
//   }
// };

// export const deleteHealth = async (req: Request, res: Response) => {
//   try {
//     const { title } = req.body;
//     const response = await axios.delete(`${BASE_URL}/${title}`);
//     if (!response) {
//       return res.status(400).json({ message: "Failed to delete data" });
//     }
//     return res.status(200).json({
//       message: "Data successfully deleted",
//     });
//   } catch (error: any) {
//     console.error("Error deleting health data:", error.message);
//     return res.status(500).json({
//       message: "Failed to delete data",
//       error: error.message,
//     });
//   }
// };
