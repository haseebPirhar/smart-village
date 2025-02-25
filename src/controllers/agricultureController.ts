import { Request, Response } from "express";
import dotenv from "dotenv";
import AgricultureModel from "../models/agricultureModel"; // Schema Import

dotenv.config();

const defaultCrops = [
  {
    agriculture: "Wheat",
    category: "Food",
    type: "Rabi",
    season: "Winter",
    yieldPerAcre: 2800,
    marketPrice: 55,
    majorRegions: ["Punjab", "Sindh", "KPK", "Balochistan"],
    sowingPeriod: "November",
    harvestingPeriod: "April",
    waterNeed: "Medium",
    soilType: "Loamy",
    climateRequirement: "Cool and Dry",
    fertilizers: ["Urea", "DAP", "Potash"],
  },
  {
    agriculture: "Cotton",
    category: "Cash",
    type: "Kharif",
    season: "Summer",
    yieldPerAcre: 1500,
    marketPrice: 250,
    majorRegions: ["Punjab", "Sindh"],
    sowingPeriod: "May",
    harvestingPeriod: "October",
    waterNeed: "High",
    soilType: "Sandy Loam",
    climateRequirement: "Hot and Humid",
    fertilizers: ["Nitrogen", "Phosphorus"],
  },
];

export const getAgriculture = async (req: Request, res: Response) => {
  try {
    const agricultureData = await AgricultureModel.find();

    if (agricultureData.length === 0) {
      return res.status(200).json({ message: "No data found, showing default crops", data: defaultCrops });
    }

    res.status(200).json(agricultureData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching agriculture data", error });
  }
};


const defaultTechniques = [
  {
    techniqueName: "Hydroponics",
    category: "Soilless Farming",
    benefits: ["Water-efficient", "Faster growth", "Less space required"],
    suitableCrops: ["Lettuce", "Strawberries", "Tomatoes"],
    requiredEquipment: ["Nutrient Solution", "Water Pumps", "Grow Lights"],
    bestSeason: "Year-round",
    waterRequirement: "Low",
    soilType: "Not required",
    climateRequirement: "Controlled Environment",
  },
  {
    techniqueName: "Precision Farming",
    category: "Smart Farming",
    benefits: ["Higher yield", "Efficient resource usage", "Reduced costs"],
    suitableCrops: ["Wheat", "Corn", "Rice"],
    requiredEquipment: ["Drones", "GPS Sensors", "AI-based Monitoring"],
    bestSeason: "All Seasons",
    waterRequirement: "Medium",
    soilType: "All types",
    climateRequirement: "Adaptable",
  },
];

// 🌾 Get all farming techniques
export const getAllTechniques = async (req: Request, res: Response) => {
  try {
    const techniques = await AgricultureModel.find();

    if (techniques.length === 0) {
      return res.status(200).json({ message: "No data found, showing default techniques", data: defaultTechniques });
    }

    res.status(200).json(techniques);
  } catch (error) {
    res.status(500).json({ message: "Error fetching techniques", error });
  }
};


