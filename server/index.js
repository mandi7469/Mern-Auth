// imports
const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");

// create an express app
const app = express();

// start the server
const PORT = 8000;
app.listen(PORT, () => console.log(`🌍 Now listening on localhost: ${PORT}`))