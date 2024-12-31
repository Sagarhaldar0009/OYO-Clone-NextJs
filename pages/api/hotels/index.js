import connectDB from "@/db"; // Import the database connection utility
import Hotel from "@/models/hotel-model"; // Import the Hotel model schema

// API handler function to manage requests
export default async function handler(req, res) {
  // Connect to the database
  connectDB();

  // Handle POST requests
  if (req.method === "POST") {
    // Create a new Hotel instance with the request body data
    const newHotel = new Hotel(req.body);

    // Save the new hotel data into the database
    const result = await newHotel.save();

    // Return a success response with the saved hotel data
    res.status(201).json({ msg: "Hotel added !", result });
  }

  // Handle GET requests
  if (req.method === "GET") {
    // Fetch hotels based on the provided city in the query parameters
    const hotels = await Hotel.find({ location: req.query.city });

    // If hotels are found for the city, return them
    if (hotels.length > 0) {
      return res.status(200).json({ msg: "Good", hotels });
    }

    // If no city-specific hotels are found, fetch all hotels
    const allhotels = await Hotel.find({});

    // Return all hotels as a response
    return res.status(200).json({ msg: "Good", allhotels });
  }
}




// import connectDB from "@/db";
// import Hotel from "@/models/hotel-model";

// export default async function handler(req, res) {
//   connectDB();
//     if (req.method === "POST") {
//       const newHotel = new Hotel(req.body);
//       const result = await newHotel.save();
//       res.status(201).json({ msg: "Hotel added !", result });
//     }

//     if (req.method === "GET") {
//         const hotels = await Hotel.find({ location: req.query.city });
//         if (hotels.length > 0) {
//         return res.status(200).json({ msg: "Good", hotels });
//         }
//         const allhotels = await Hotel.find({});
//         return res.status(200).json({ msg: "Good", allhotels });
//     }
// }