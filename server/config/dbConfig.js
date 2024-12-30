import mongoose from "mongoose";

const dbConfig = async () => {
  const uri = process.env.mongoURI;

  if (!uri) {
    console.error("MONGO_URI is not defined in the environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri); // Connect without deprecated options
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default dbConfig;
