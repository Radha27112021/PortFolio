import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import portfolioRoute from "./routes/portfolioRoutes.js";
import dbConfig from "./config/dbConfig.js";

dotenv.config();
dbConfig();

const app = express();
const port = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(express.json());

// Routes
app.use("/api/portfolio", portfolioRoute);

// Serve static files from React app
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "user", "build")));

// Catch-all route for serving the React app
app.get("*", (_, res) => {
  res.sendFile(path.resolve(__dirname, "user", "build", "index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
