const express = require("express");
const connectDB = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware to parse JSON
app.use(express.json()); 

// API Routes
app.use("/api", userRoutes);

// Connect to MongoDB
connectDB();

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
