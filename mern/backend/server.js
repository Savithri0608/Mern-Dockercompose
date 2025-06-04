import express from "express";
import cors from "cors";
import records from "./routes/record.js";

const PORT = process.env.PORT || 5050;
const app = express();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
  origin: 'http://52.23.232.26:5173',  // Replace with actual IP or domain
  credentials: true,                     // If using cookies or sessions
}));

app.use(express.json());
app.use("/record", records);


// start the Express server
app.listen(5050, '0.0.0.0', () => {
  console.log("Server running on 5050");
});

