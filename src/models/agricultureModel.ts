import mongoose, { Schema, Document } from "mongoose";

// 🌾 Agriculture Interface (TypeScript)
interface IAgriculture extends Document {
  agriculture: string;   
  category: string;       
  type: string;           
  season: string;        
  yieldPerAcre: number;
  marketPrice: number;   
  majorRegions: string[]; 
  sowingPeriod: string;   
  harvestingPeriod: string; 
  waterNeed: string;      
  soilType: string;       
  climateRequirement: string; 
  fertilizers: string[];  
}

// 🌱 Agriculture Schema
const AgricultureSchema: Schema = new Schema({
  agriculture: { type: String, required: true },
  category: {
    type: String,
    enum: ["Food", "Cash", "Oilseed", "Fodder", "Pulses"],
    required: true,
  },
  type: { type: String, enum: ["Kharif", "Rabi", "Zaid"], required: true },
  season: { type: String, required: true },
  yieldPerAcre: { type: Number, required: true },
  marketPrice: { type: Number, required: true },
  majorRegions: { type: [String], required: true },
  sowingPeriod: { type: String, required: true },
  harvestingPeriod: { type: String, required: true },
  waterNeed: { type: String, enum: ["High", "Medium", "Low"], required: true },
  soilType: { type: String, required: true },
  climateRequirement: { type: String, required: true },
  fertilizers: { type: [String], required: true },
});


interface IFarmingTechnique extends Document {
  techniqueName: string;
  category: string; // Organic, Hydroponics, Precision, etc.
  benefits: string[];
  suitableCrops: string[];
  requiredEquipment: string[];
  bestSeason: string;
  waterRequirement: string;
  soilType: string;
  climateRequirement: string;
}


const FarmingTechniqueSchema: Schema = new Schema(
  {
    techniqueName: { type: String, required: true, unique: true }, // Technique Name
    category: { type: String, required: true }, // Type of Farming (Organic, Hydroponic, etc.)
    benefits: [{ type: String, required: true }], // List of Benefits
    suitableCrops: [{ type: String, required: true }], // Crops Suitable for this Technique
    requiredEquipment: [{ type: String, required: true }], // Tools & Equipment Needed
    bestSeason: { type: String, required: true }, // Best Season to Use
    waterRequirement: { type: String, required: true }, // Water Usage (Low, Medium, High)
    soilType: { type: String, required: true }, // Suitable Soil Type
    climateRequirement: { type: String, required: true }, // Climate Condition
  },
  { timestamps: true }
);

// 📌 Model Export
export default mongoose.model<IAgriculture>("Agriculture", AgricultureSchema);
