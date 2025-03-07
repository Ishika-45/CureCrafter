import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const JWT_SECRET = process.env.JWT_SECRET;

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(req.body);

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "Missing Details" });
    }


    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Password should be minimum 8 characters." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const UserData = { name, email, password: hashedPassword };

    const newUser = new userModel(UserData);
    const user = await newUser.save();

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ success: true, token, userId: user._id });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: "1h" });
      res.json({ success: true, message: "User logged in", token });
    } else {
      return res.status(401).json({ success: false, message: "Invalid Credentials" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};



export { registerUser, loginUser };
