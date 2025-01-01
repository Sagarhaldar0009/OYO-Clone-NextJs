// const Footer = () => {
//     return (
//       <div className=" h-28 flex justify-center items-center bg-gray-200 text-2xl">
//         All rights are reserved. &copy; 2025.
//       </div>
//     )
//   }
  
//   export default Footer


"use client";

import Block from "./Block";

const Footer = () => {
  const cities = [
    "Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad",
    "Chandigarh", "Dehradun", "Manali", "Goa", "Pune", "Manipur",
    "Meghalaya", "Agra", "Lucknow", "Kashmir", "Kerala"
  ];

  return (
    <footer className="bg-gray-100 text-gray-800">
      {/* Upper Section */}
      <div className="hidden sm:flex justify-between items-center border-b border-gray-300 py-8 px-10">
        <Block
          title={"Become a member"}
          para={"Additional 0% off on stays."}
          img={"/letter-w.png"}
        />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
          img={"/suitcase.png"}
        />
        <Block
          title={"List your property"}
          para={"Start earning in 30 min."}
          img={"/building.png"}
        />
        <Block
          title={"987654321"}
          para={"Call us to book now."}
          img={"/phone-call.png"}
        />
      </div>

      {/* Cities Section */}
      <div className="py-5 px-10">
        <h3 className="text-lg font-semibold mb-3 text-center sm:text-left">Popular Destinations</h3>
        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
          {cities.map((city, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-200 text-sm rounded-lg hover:bg-gray-300 cursor-pointer"
            >
              {city}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="py-4 flex flex-col sm:flex-row justify-between items-center bg-gray-200 px-10">
        <p className="text-center sm:text-left text-sm sm:text-base">
          All rights are reserved &copy; with Sagar; 2025.
        </p>
        <div className="mt-3 sm:mt-0 flex gap-5">
          <a href="#" className="text-gray-600 hover:text-red-500 text-sm sm:text-base">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 text-sm sm:text-base">
            Terms & Conditions
          </a>
          <a href="#" className="text-gray-600 hover:text-red-500 text-sm sm:text-base">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
