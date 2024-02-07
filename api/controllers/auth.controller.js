import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === " " ||
    password === " " ||
    email === " "
  ) {
    res.json("All fields are reqired!");
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.status(200).json("User Created successfully");
  } catch (error) {
    res.status(400).json(error.message);
  }
};
