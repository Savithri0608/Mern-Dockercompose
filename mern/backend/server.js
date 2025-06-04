import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const app = express();

// CORS setup
app.use(cors({
  origin: 'http://52.23.232.26:5173',  // Your frontend URL
  credentials: true,
}));

// Middleware
app.use(express.json());

// Routes
app.use("/record", records);

// Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
