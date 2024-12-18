const User = require("../models/user");

// test endpoint handler
const test = (req, res) => {
  res.json("test is working");
};

// register a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // check if name was entered
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    // check if password is good
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });
    }
    // check email
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email already exists",
      });
    }
    // create new user
    const user = await User.create({
      name,
      email,
      password,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// exports
module.exports = {
  test,
  registerUser,
};
