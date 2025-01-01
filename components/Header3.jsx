"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Header3 = () => {
  const [city, setCity] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (city.trim()) {
      router.push(`/hotels?city=${city}`);
    } else {
      alert("Please enter a city");
    }
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-auto sm:h-60 p-5">
      <div className="text-center">
        <h2 className="text-2xl sm:text-4xl text-white font-bold leading-snug">
          Over 157,000 hotels and homes across 35 countries
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-5 mx-2 sm:mx-20 gap-4">
        <input
          type="text"
          placeholder="Search for your destination..."
          className="w-full sm:w-6/12 h-12 sm:h-16 outline-none px-3 text-base sm:text-lg border sm:border-r-2 border-gray-400 rounded sm:rounded-none"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          type="button"
          className="h-12 sm:h-16 px-5 sm:px-3 py-2 w-full sm:w-72 bg-green-400 hover:bg-green-600 text-white text-lg sm:text-xl rounded sm:rounded-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center mt-5 mx-2 sm:mx-20 gap-4 font-bold">
        <button
          type="button"
          className="w-full sm:w-auto h-12 sm:h-16 px-5 py-2 bg-white bg-opacity-20 text-white hover:bg-opacity-40 rounded"
        >
          Continue your search
        </button>
        <button
          type="button"
          className="w-full sm:w-auto h-12 sm:h-16 px-5 py-2 border-2 border-white text-white hover:bg-white hover:text-red-600 rounded"
        >
          Homestay in India hotels
        </button>
      </div>
    </div>
  );
};

export default Header3;




// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";  // Import useRouter for programmatic navigation

// const Header3 = () => {
//   const [city, setCity] = useState("");
//   const router = useRouter();  // Initialize router

//   const handleSearch = () => {
//     if (city.trim()) {
//       router.push(`/hotels?city=${city}`);
//     } else {
//       // Handle empty input scenario
//       alert("Please enter a city");
//     }
//   };

//   return (
//     <div className=" bg-gradient-to-r from-red-600 to-red-400 h-60">
//       <div className=" p-5">
//         <h2 className=" text-4xl text-white text-center font-bold">
//           Over 157,000 hotels and homes across 35 countries
//         </h2>
//         <div className="flex justify-center my-5 mx-20">
//           <input
//             type="text"
//             placeholder="Search..."
//             className=" w-6/12 h-16 outline-none px-3 text-lg border-r-2 border-gray-400"
//             onChange={(e) => {
//               setCity(e.target.value);
//             }}
//           />

//           <button
//             type="button"  // Change type to "button" to prevent form submission
//             className=" h-16 px-3 py-2 w-72 bg-green-400 hover:cursor-pointer hover:bg-green-600 text-white text-xl"
//             onClick={handleSearch}  // Trigger the search function
//           >
//             Search
//           </button>
//         </div>
//         <div className="flex mx-20 my-5 font-bold">
//           <button
//             type="submit"
//             className=" h-16 px-3 py-2 hover:cursor-pointer text-white mr-5"
//           >
//             Continue your search
//           </button>
//           <button
//             type="submit"
//             className=" h-16 px-3 py-2 hover:cursor-pointer border-2 border-white text-white mr-5 hover:bg-gray-500 rounded-xl"
//           >
//             Homestay in India hotels
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header3;