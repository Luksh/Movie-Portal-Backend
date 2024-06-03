import express from "express";
import User from "./user.model.js";
import validateReqBody from "../Middleware/validate.req.body.middleware.js";
import { registerUserValidation } from "./user.validation.js";

const router = express.Router();

router.post("/user/register", validateReqBody(registerUserValidation), async (req, res) => {
  // extract new user from req.body
  const newUser = req.body;

  //? check if user with provided email already exists in the system
  //  find user by email
  const user = await User.findOne({ email: newUser.email });

  // if user, throw error
  if (user) {
    return res.status(409).send({ message: "Email already exists." });
  }

  // Create hash password before saving user
  const plainPassword = newUser.password;
  const saltRounds = 10; // to add randomness
  const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

  // Update new user password with hashedPassword
  newUser.password = hashedPassword;

  // Save user
  await User.create(newUser);

  return res.status(201).send({ message: "User registered successfully." });
});

export default router;
