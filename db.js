import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  let cachedDB = null;

  if (cachedDB) {
    return cachedDB;
  } else {
    try {
      const newDB = await mongoose.connect(URI);
      console.log("DB Connected");
      cachedDB = newDB;
      return newDB;
    } catch (error) {
      console.error("DB Connection Error:", error);
      throw error;
    }
  }
};

export default connectDB;