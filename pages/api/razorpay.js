import connectDB from "@/db";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB();
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const hotel = await Hotel.findById(req.body.id);
    if (!hotel) {
      console.log("Hotel not found");
      return res.status(404).json({ message: "Hotel not found" });
    }

    const amount = hotel.price;
    const options = {
      amount: (amount * 100).toString(),
      currency: "INR",
      receipt: shortid.generate(),
      payment_capture: 1,
    };

    try {
      console.log("Creating Razorpay order...");
      const result = await razorpay.orders.create(options);
      console.log("Razorpay order created:", result);
      return res.status(201).json({
        id: result.id,
        currency: result.currency,
        amount: result.amount,
      });
    } catch (err) {
      console.error("Error creating Razorpay order:", err);
      return res.status(400).json(err);
    }
  }
}