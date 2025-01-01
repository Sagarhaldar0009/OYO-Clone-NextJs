// "use client";

// import Image from "next/image";

// const Header4 = () => {
//   return (
//     <div className="flex justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5">
//       <div className="flex items-center">
//         <Image
//           src={"/fire.jpg"}
//           alt="fire"
//           width={200}
//           height={200}
//           className=" w-32 h-32 rounded-full mr-5"
//         />
//         <div className=" text-xl">
//           <p className=" font-bold">Get access to exclusive deals</p>
//           <p>Only the best deals reach your inbox</p>
//         </div>
//       </div>
//         <div className="flex">
//             <input type="email" className="px-6 py-3 rounded-lg mr-5 w-80 h-16 outline-none border border-gray-300" placeholder="e.g. john@gmail.com"/>
//             <button type="submit" className=" w-48 rounded-lg h-14 bg-red-500 text-xl text-white cursor-pointer ">Notify</button>
//         </div>
//     </div>
//   );
// };

// export default Header4;


"use client";

import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center my-14 border-2 rounded-lg border-gray-300 px-5 py-5 bg-white shadow-md">
      {/* Image and Text Section */}
      <div className="flex flex-col sm:flex-row items-center mb-5 sm:mb-0">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-20 h-20 sm:w-32 sm:h-32 rounded-full mb-3 sm:mb-0 sm:mr-5"
        />
        <div className="text-center sm:text-left">
          <p className="font-bold text-lg sm:text-xl text-gray-700">
            Get access to exclusive deals
          </p>
          <p className="text-sm sm:text-base text-gray-500">
            Only the best deals reach your inbox
          </p>
        </div>
      </div>

      {/* Input and Button Section */}
      <div className="flex flex-col sm:flex-row items-center w-full sm:w-auto gap-4">
        <input
          type="email"
          className="px-4 py-3 w-full sm:w-80 h-12 sm:h-16 rounded-lg outline-none border border-gray-300 text-sm sm:text-base"
          placeholder="e.g. john@gmail.com"
        />
        <button
          type="submit"
          className="w-full sm:w-48 h-12 sm:h-14 rounded-lg bg-red-500 text-white text-sm sm:text-xl cursor-pointer hover:bg-red-600 transition-colors"
        >
          Notify
        </button>
      </div>
    </div>
  );
};

export default Header4;