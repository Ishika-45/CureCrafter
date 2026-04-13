import validator from 'validator';
import bcrypt from 'bcryptjs';
import {v2 as cloudinary} from 'cloudinary';
import doctorModel from '../models/doctorModel.js';
import jwt from 'jsonwebtoken';

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, specialization, education, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        if (!name || !email || !password || !specialization || !education || !experience || !about || !fees || !address){
            return res.status(400).json({ message: 'All fields are required' });
        }

        if(!imageFile){
            return res.status(400).json({ message: 'Image file is required' });
        }

        if(!validator.isEmail(email)){
            return res.status(400).json({ message: 'Invalid email format' });
        }

        if(password.length < 8){
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
            // folder: 'doctor_images',
        });
        const imageUrl = imageUpload.secure_url;

        const parsedAddress = JSON.parse(address);

const doctorData = {
  name,
  email,
  image: imageUrl,
  password: hashedPassword,
  speciality: specialization,
degree: education,    
  experience,
  about,
  fees,
  address: parsedAddress,
  date: Date.now(),
};

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();
        res.status(201).json({ message: 'Doctor added successfully', doctor: newDoctor });
    }

    catch (error) {
        console.error('Error adding doctor:', error);
        res.status(500).json({ message: 'Server error' });
    }
}

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign(
        { email, role: "admin" },   // ✅ payload must be object
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      return res.status(200).json({
        success: true,              
        token
      });
    } 
    else {
      return res.status(401).json({
        success: false,
        message: "Invalid admin credentials"
      });
    }
  } 
  catch (error) {
    console.error("Error logging in admin:", error);
    return res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

//API to get all doctors list for admin panel
const allDoctors = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).sort({ date: -1 }).select('-password');
    res.status(200).json({ success: true, doctors });
  } catch (error) {
    console.error("Error fetching doctors:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};


export { addDoctor, loginAdmin, allDoctors };
