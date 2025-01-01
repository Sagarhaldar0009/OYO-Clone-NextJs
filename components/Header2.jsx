// import React from 'react'

// const Header2 = () => {
//     const List = [
//         {
//           name: "Banglore",
//         },
//         {
//           name: "Kolkata",
//         },
//         {
//           name: "Mumbai",
//         },
//         {
//           name: "Delhi",
//         },
//         {
//           name: "Hyderabad",
//         },
//     ];
//     return (
//         <div>
//           <div className="flex px-10 py-3 bg-gray-100 justify-between">
//             {
//                 List.map((e)=>{
//                     return(
//                         <span key={e.name} >{e.name}</span>
//                     )
//                 })
//             }
//           </div>
//         </div>
//     );
// }

// export default Header2



import React, { useState, useEffect } from "react";

const Header2 = () => {
  const List = [
    { name: "Delhi" },
    { name: "Bangalore" },
    { name: "Mumbai" },
    { name: "Kolkata" },
    { name: "Hyderabad" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % List.length);
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, [List.length]);

  const visibleItems = [
    List[currentIndex],
    List[(currentIndex + 1) % List.length],
  ];

  return (
    <div>
      {/* Large Screen View */}
      <div className="hidden sm:flex px-10 py-3 bg-gray-100 justify-between">
        {List.map((e) => (
          <span key={e.name}>{e.name}</span>
        ))}
      </div>

      {/* Small Screen View */}
      <div className="flex sm:hidden px-10 py-3 bg-gray-100 justify-around text-center transition-transform duration-500 ease-in-out">
        {visibleItems.map((e) => (
          <span
            key={e.name}
            className="font-bold text-lg text-gray-700"
          >
            {e.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header2;