const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const VendorRouter = require("./routes/vendor.rt.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT || 8000;
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { dbName: "vendor-management" })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/vendors", VendorRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
