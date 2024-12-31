import connectDB from "@/db"; // Step 1: Import the database connection utility
import User from "@/models/user-model"; // Step 2: Import the User model
import bcrypt from "bcrypt"; // Step 3: Import bcrypt for password hashing
import jwt from "jsonwebtoken"; // Step 4: Import JSON Web Token for token generation

export default async function handler(req, res) {
  // Step 5: Check if the HTTP method is POST
  if (req.method === "POST") {
    connectDB(); // Step 6: Establish a connection to the database

    // Step 7: Extract the name, email, and password from the request body
    const { name, email, password } = req.body;

    // Step 8: Validate if all fields are present
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "All Fields are Mandatory !" });
    }

    // Step 9: Check if the email is already registered
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ msg: "User already Registered !" });
    }

    // Step 10: Hash the user's password for secure storage
    const hashedPassword = await bcrypt.hash(password, 10);

    // Step 11: Create a new user instance with the provided details
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    // Step 12: Save the new user instance to the database
    const result = await newUser.save();

    // Step 13: Generate a JWT token with the user's ID and a secret key
    const token = jwt.sign({ token: result._id }, process.env.JWT_SECRET, {
      expiresIn: "30d", // Token validity is 30 days
    });

    // Step 14: Return a success response with a message and the generated token
    return res
      .status(201)
      .json({ msg: "Registered Succesfully !", token });
  }
}