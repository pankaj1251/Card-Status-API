const express = require("express");
const csv = require("csv-parser");
const fs = require("fs");
const mongoose = require("mongoose");
const cardController = require("./controllers/cardController"); // Import the Card controller
const Card = require("./models/Card"); // Import the Card schema

const app = express();
const dataFolderPath = "./data";

// Connect to MongoDB
const MONGO_URI = "mongodb://localhost:27017/cardStatusDB";
mongoose.connect(MONGO_URI);
const db = mongoose.connection;

// Load CSV data into MongoDB
fs.readdirSync(dataFolderPath).forEach((file) => {
  if (file.endsWith(".csv")) {
    const filePath = `${dataFolderPath}/${file}`;
    const stream = fs.createReadStream(filePath);
    stream
      .pipe(csv())
      .on("data", async (row) => {
        await Card.create(row);
      })
      .on("end", () => {
        console.log(
          `CSV file ${file} successfully processed and data stored in MongoDB.`
        );
      });
  }
});

app.get("/get_card_status", cardController.getCardStatus);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
