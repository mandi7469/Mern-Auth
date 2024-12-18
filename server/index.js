// imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");

// database connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

// create an express app
const app = express();

app.use("/", require("./routes/authRoutes"));

// start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`🌍 Now listening on localhost: ${PORT}`));
