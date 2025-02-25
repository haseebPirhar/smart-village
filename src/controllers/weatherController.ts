import { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const WEATHER_API_KEY = process.env.OPENWEATHERMAP_API_KEY; // Ensure this is set in .env
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// 🟢 Get Weather by City Name
export const getWeather = async (req: Request, res: Response) => {
  try {
    const { city } = req.query;

    if (!city) {
      return res.status(400).json({ message: "City name is required!" });
    }

    const response = await axios.get(
      `${BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
    );

    return res.json({
      city: response.data.name,
      temperature: response.data.main.temp,
      weather: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      windSpeed: response.data.wind.speed,
    });
  } catch (error: any) {
    console.error("Error fetching weather data:", error.message);
    return res
      .status(500)
      .json({ message: "Failed to fetch weather data", error: error.message });
  }
};

// // 🔵 Post Weather data save
// export const postWeather = async (req: Request, res: Response) => {
//   try {
//     const { city } = req.body;

//     if (!city) {
//       return res.status(400).json({ message: "City name is required!" });
//     }

//     const response = await axios.get(
//       `${BASE_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
//     );
//     res.locals.weatherData = {
//       city: response.data.name,
//       temperature: response.data.main.temp,
//       weather: response.data.weather[0].description,
//       humidity: response.data.main.humidity,
//       windSpeed: response.data.wind.speed,
//     };
//     return res.json({ message: "Weather data saved successfully!" });
//   } catch (error: any) {
//     console.error("Error saving weather data:", error.message);
//     return res
//       .status(500)
//       .json({ message: "Failed to save weather data", error: error.message });
//   }
// };

// // 🔴 Delete Weather data
// export const deleteWeather = async (req: Request, res: Response) => {
//   try {
//     const { city } = req.body;

//     if (!city) {
//       return res.status(400).json({ message: "Weather data ID is required!" });
//     }
//     return res.json({ message: "Weather data deleted successfully!" });
//   } catch (error: any) {
//     console.error("Error deleting weather data:", error.message);
//     return res
//       .status(500)
//       .json({ message: "Failed to delete weather data", error: error.message });
//   }
// };
