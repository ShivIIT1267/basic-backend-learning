import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}`
    );
    console.log(`\n MongoDB connected`);
  } catch (error) {
    console.log(`MONGO_URI: "${process.env.MONGODB_URL}"`);
    console.log("MONGO DB CONNECTION ERROR", error);
    process.exit(1);
  }
};

export default connectDB;
