import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import validator from "validator"; // Ensure validator is imported
import doctorModel from "../models/doctorModel.js";

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      speciality,
      degree,
      experience,
      about,
      fees,
      address,
    } = req.body;
    const imageFile = req.file;

    // Check for missing fields
    if (
      !name ||
      !email ||
      !password ||
      !speciality ||
      !degree ||
      !experience ||
      !about ||
      !fees
   
    ) {
      return res.status(400).json({
        message: "Missing details",
      });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    // Validate password length
    if (password.length < 8) {
      return res.status(400).json({
        message: "Password length must be at least 8 characters",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Upload the image
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
      resource_type: "image",
    });

    const imageUrl = imageUpload.secure_url;

    // Create doctor data object
    const doctorData = {
      name,
      email,
      password: hashedPassword,
      speciality,
      degree,
      experience,
      about,
      fees,
      address: JSON.parse(address),
      imageUrl,
      date: Date.now(),
    };

    // Save the doctor to the database
    const newDoctor = new doctorModel(doctorData);
    await newDoctor.save();

    // Send success response
    return res.status(200).json({
      success: true,
      message: "Doctor added",
    });
  } catch (error) {
    console.error(error);

    // Send error response
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { addDoctor };
