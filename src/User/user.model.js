import mongoose from "mongoose";

// Set rule
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    maxlength: 65,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
    enum: ["user", "admin"],
  },
  gender: {
    type: String,
    required: false,
    trim: true,
    enum: ["male", "female", "preferNotToSay"],
  },
});

// Create table
const User = mongoose.model("User", userSchema);

export default User;
