// imports
const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
} = require("../controllers/authController");

// middleware
router.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

// GET route for the root path
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);

// router export
module.exports = router;
