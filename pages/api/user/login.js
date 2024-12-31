import connectDB from "@/db"; // Step 1: Import the database connection utility
import User from "@/models/user-model"; // Step 2: Import the User model
import bcrypt from "bcrypt"; // Step 3: Import bcrypt for password comparison
import jwt from "jsonwebtoken"; // Step 4: Import JSON Web Token for token generation

export default async function handler(req, res) {
  // Step 5: Check if the HTTP method is POST
  if (req.method === "POST") {
    connectDB(); // Step 6: Establish a connection to the database

    // Step 7: Extract the email and password from the request body
    const { email, password } = req.body;

    // Step 8: Validate if both email and password are provided
    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required !" });
    }

    // Step 9: Check if the email exists in the database
    const emailExists = await User.findOne({ email });
    if (!emailExists) {
      return res.status(400).json({ msg: "Please Register first !" });
    }

    // Step 10: Compare the provided password with the hashed password in the database
    const passwordMatched = await bcrypt.compare(
      password,
      emailExists.password
    );

    // Step 11: If the password matches, generate a JWT token
    if (passwordMatched) {
      const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
        expiresIn: "30d", // Token validity is 30 days
      });

      // Step 12: Return a success response with the message and token
      return res.status(200).json({ msg: "Logged in successfully !", token });
    }

    // Step 13: If the password does not match, return an error response
    return res.status(400).json({ msg: "Invalid Credentials !" });
  }
}






// import connectDB from "@/db";
// import User from "@/models/user-model";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     connectDB();
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({ msg: "Email and password required !" });
//     }
//     const emailExists = await User.findOne({ email });
//     if (!emailExists) {
//       return res.status(400).json({ msg: "Please Register first !" });
//     }
//     const passwordMatched = await bcrypt.compare(
//       password,
//       emailExists.password
//     );
//     if (passwordMatched) {
//       const token = jwt.sign({ token: emailExists._id }, process.env.JWT_SECRET, {
//         expiresIn: "30d",
//       });
//       return res.status(200).json({ msg: "Logged in successfully !", token });
//     }
//     return res.status(400).json({ msg: "Invalid Credentitials !" });
//   }
// }