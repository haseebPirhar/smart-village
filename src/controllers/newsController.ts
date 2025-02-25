import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const NEWS_API_KEY = process.env.NEWS_API_KEY; 
const BASE_URL = 'https://newsdata.io/api/1/latest?apikey=pub_6915093c2a61c1b780c55540f03e95589d861&category=politics&country=bd';

// 📰 Get News by Category
export const getNews = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;

    if (!NEWS_API_KEY) {
      return res.status(500).json({ message: "News API key is missing!" });
    }

    // News API se data fetch karein
    const response = await axios.get(BASE_URL, {
      params: {
        category: category || "politics", // Default category (change as needed)
        country: "bd", // Default country (change as needed)
        language: "en",
        apiKey: NEWS_API_KEY,
      },
    });

    if (response.data.status !== "success") {
      return res.status(500).json({ message: "Failed to fetch news data!" });
    }

    return res.status(200).json({ articles: response.data.results });
  } catch (error: any) {
    console.error("Error fetching news data:", error.message);
    return res.status(500).json({ message: "Error fetching news", error: error.message });
  }
};


// // Post news Save news
// export const postNews = async (req: Request, res: Response) => {
//   try {
//     const { country = "pak", category = "all" } = req.body;
//     const response = await axios.get(BASE_URL);
//     const newsData = response.data.articles;
//     if (!newsData) {
//       return res.status(404).json({ message: "No news data found" });
//     }
//     const savedNews = newsData.map((news: any) => {
//       return {
//         title: news.title,
//         description: news.description,
//         url: news.url,
//         urlToImage: news.urlToImage,
//         publishedAt: news.publishedAt,
//       };
//     });

//     return res
//       .status(201)
//       .json({ message: "News saved successfully", data: savedNews });
//   } catch (error: any) {
//     console.error("Error saving news data:", error.message);
//     return res
//       .status(500)
//       .json({ message: "Failed to save news data", error: error.message });
//   }
// };

// // Delete news
// export const deleteNews = async (req: Request, res: Response) => {
// try {
//     const { city } = req.body;
//     if (!city) {
//       return res.status(400).json({ message: "News ID is required!" });
//     }
//     // Delete news by ID
//     return res.json({ message: "News deleted successfully!" });
//   } catch (error: any) {
//     console.error("Error fetching News data:", error.message);
//     return res
//       .status(500)
//       .json({ message: "Failed to fetch News data", error: error.message });
//   }
// };
