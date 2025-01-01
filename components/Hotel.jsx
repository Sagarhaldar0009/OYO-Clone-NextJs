// import Image from "next/image";
// import Link from "next/link";

// const Hotel = ({ e }) => {
//   return (
//     <div className="border-2 border-red-500 rounded-lg h-96 w-full mb-5 p-5">
//       <div className="flex">
//         {/* Main Banner Image */}
//         <Image
//           src={e?.banner}
//           alt={`Banner of ${e?.name}`}
//           width={200}
//           height={200}
//           className="w-96 h-60 mr-3"
//         />

//         {/* Gallery Images */}
//         <div className="flex flex-col justify-between">
//           {e
//             ? e.gallery?.map((ele, index) => {
//                 return (
//                   <Image
//                     key={ele}
//                     src={ele}
//                     alt={`Gallery image ${index + 1} of ${e?.name}`}
//                     width={200}
//                     height={200}
//                     className="w-28 h-16 object-cover"
//                   />
//                 );
//               })
//             : ""}
//         </div>

//         {/* Hotel Details */}
//         <div className="ml-20">
//           <h2 className="font-bold text-3xl line-clamp-1">{e?.name}</h2>
//           <p className="text-justify my-5 text-lg">{e?.description}</p>

//           {/* Facilities */}
//           <div className="text-2xl my-5">
//             <span className="font-bold">Facilities: </span>
//             <ul className="flex">
//               {e
//                 ? e.facilities?.map((ele, index) => {
//                     return (
//                       <li
//                         key={ele.name}
//                         className="mr-10 mb-3 flex items-center"
//                       >
//                         <span>
//                           <Image
//                             src={ele.img}
//                             alt={`Facility ${index + 1}: ${ele.name}`}
//                             width={200}
//                             height={200}
//                             className="w-8 h-8 rounded-full"
//                           />
//                         </span>
//                         <span className="ml-5">{ele.name}</span>
//                       </li>
//                     );
//                   })
//                 : ""}
//             </ul>
//           </div>

//           {/* Price and Details Link */}
//           <div className="flex items-center">
//             <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
//               Price: &#8377; {e?.price}
//             </button>
//             <Link
//               href={`/hotels/${e?._id}`}
//               className="text-xl font-bold text-red-600 ml-10"
//             >
//               See Details
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hotel;




import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg h-auto md:h-96 w-full mb-5 p-5">
      <div className="flex flex-col md:flex-row">
        {/* Main Banner Image */}
        <Image
          src={e?.banner}
          alt={`Banner of ${e?.name}`}
          width={200}
          height={200}
          className="w-full md:w-96 h-60 object-cover mb-4 md:mb-0"
        />

        {/* Gallery Images */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-3 md:space-x-6 mb-4 md:mb-0">
          {e?.gallery?.map((ele, index) => (
            <Image
              key={ele}
              src={ele}
              alt={`Gallery image ${index + 1} of ${e?.name}`}
              width={150}
              height={100}
              className="w-24 h-16 object-cover rounded-lg"
            />
          ))}
        </div>

        {/* Hotel Details */}
        <div className="ml-0 md:ml-5 mt-4 md:mt-0">
          <h2 className="font-bold text-2xl md:text-3xl line-clamp-2">{e?.name}</h2>
          <p className="text-justify my-3 text-lg">{e?.description}</p>

          {/* Facilities */}
          <div className="text-2xl my-4">
            <span className="font-bold">Facilities: </span>
            <ul className="flex flex-wrap space-x-6">
              {e?.facilities?.map((ele, index) => (
                <li key={ele.name} className="flex items-center mb-3">
                  <Image
                    src={ele.img}
                    alt={`Facility ${index + 1}: ${ele.name}`}
                    width={30}
                    height={30}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="ml-3">{ele.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price and Details Link */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10">
            <button className="w-full md:w-60 h-14 rounded-lg bg-blue-400 text-lg">
              Price: &#8377; {e?.price}
            </button>
            <Link
              href={`/hotels/${e?._id}`}
              className="text-xl font-bold text-red-600"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
