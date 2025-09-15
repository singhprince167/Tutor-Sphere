import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import common_routes from "./routes/common_routes.js";
import admin_routes from "./routes/admin_routes.js";
import user_routes from "./routes/user_routes.js";
import tutor_routes from "./routes/tutor_routes.js";
import connectDB from "./database/db.js";

// Create Express server
const app = express();

// Configure dotenv
dotenv.config();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Fixed deprecated warning
app.use(express.static("public"));

// Connect to MongoDB
connectDB();

// Routes
app.use("/", common_routes);
app.use("/admin", admin_routes);
app.use("/user", user_routes);
app.use("/tutor", tutor_routes);

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
