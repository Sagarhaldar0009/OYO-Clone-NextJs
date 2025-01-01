"use client";
import Head from "next/head";
import Image from "next/image";
import Cookies from "js-cookie";
import Link from "next/link";
import { useEffect, useState } from "react";

const SingleHotel = ({ hotel }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const cookie = Cookies.get("user");
    if (cookie) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, []);

  return (
    <>
      <Head>
        <title>{hotel?.name}</title>
      </Head>
      <div className="w-full md:w-10/12 mx-auto my-10 px-5">
        {/* Main Banner Image */}
        <div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full rounded-lg overflow-hidden shadow-lg">
          <Image
            src={hotel?.banner}
            alt={`Banner of ${hotel?.name}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
            priority
          />
        </div>

        {/* Gallery Images */}
        <div className="mt-6 flex space-x-4 overflow-x-auto">
          {hotel?.gallery?.map((image, index) => (
            <div key={index} className="relative w-1/4 min-w-[200px] h-[200px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image}
                alt={`Gallery Image ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
            </div>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="text-3xl sm:text-4xl font-semibold text-gray-800">{hotel?.name}</h3>
          <p className="text-lg sm:text-xl text-gray-600 mt-4 text-justify">{hotel?.description}</p>
          
          <div className="flex justify-between items-center mt-5">
            <button className="w-60 sm:w-72 h-14 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-600 transition-all">
              Price: &#8377; {hotel?.price}
            </button>
          </div>

          <div className="mt-4 sm:mt-0 flex items-center">
            <p className="text-lg font-semibold text-gray-700">City :</p>
            <p className="text-lg text-gray-600 mx-1">{hotel?.location}</p>
          </div>

          <p className="text-2xl font-semibold text-gray-800 my-5">Facilities:</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 text-center text-lg">
            {hotel?.facilities?.map((ele, index) => (
              <li
                key={ele.name}
                className="flex flex-col items-center justify-center"
              >
                <Image
                  src={ele.img}
                  alt={`Facility ${index + 1}: ${ele.name}`}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="mt-2 text-gray-700">{ele.name}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            {auth ? (
              <Link href={`/payment/${hotel?._id}`}>
                <button className="w-60 sm:w-72 h-14 bg-red-500 text-white rounded-lg text-lg hover:bg-red-600 transition-all">
                  Book Now
                </button>
              </Link>
            ) : (
              <span className="text-xl sm:text-2xl text-gray-700">
                Please{" "}
                <Link href="/login" className="text-blue-500 hover:underline">
                  Log in
                </Link>{" "}
                to get new Offers!
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();

  return {
    props: {
      hotel: data.hotel,
    },
  };
}

export default SingleHotel;




// "use client";
// import Head from "next/head";
// import Image from "next/image";
// import Cookies from "js-cookie";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const SingleHotel = ({ hotel }) => {
//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     const cookie = Cookies.get("user");
//     if (cookie) {
//       setAuth(true);
//       return;
//     }
//     setAuth(false);
//   }, []);

//   return (
//     <>
//       <Head>
//         <title>{hotel?.name}</title>
//       </Head>
//       <div className="w-7/12 mx-auto my-10">
//         {/* Main Banner Image */}
//         <Image
//           src={hotel?.banner}
//           alt={`Banner of ${hotel?.name}`}
//           width={2000}
//           height={2000}
//           className="w-full h-large-box my-5"
//           priority
//         />
//         <div>
//           <h3 className="text-3xl font-bold">{hotel?.name}</h3>
//           <p className="text-xl my-5 text-justify">{hotel?.description}</p>
//           <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">
//             Price: &#8377; {hotel?.price}
//           </button>
//           <p className="text-3xl font-bold my-5">Facilities:</p>
//           <ul className="flex text-xl justify-between">
//             {hotel
//               ? hotel.facilities?.map((ele, index) => {
//                   return (
//                     <li
//                       key={ele.name}
//                       className="mr-10 mb-3 flex items-center"
//                     >
//                       <span>
//                         <Image
//                           src={ele.img}
//                           alt={`Facility ${index + 1}: ${ele.name}`}
//                           width={200}
//                           height={200}
//                           className="w-8 h-8 rounded-full"
//                         />
//                       </span>
//                       <span className="ml-5">{ele.name}</span>
//                     </li>
//                   );
//                 })
//               : ""}
//           </ul>
//           {auth ? (
//             <Link href={`/payment/${hotel?._id}`}>
//               <button className="w-60 h-14 rounded-lg bg-red-400 my-5 text-lg">
//                 Book Now
//               </button>
//             </Link>
//           ) : (
//             <span className="text-2xl">
//               Please{" "}
//               <Link href={"/login"} className="text-blue-500">
//                 Log in
//               </Link>{" "}
//               to get new Offers!
//             </span>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export async function getServerSideProps(ctx) {
//   const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
//   const data = await res.json();

//   return {
//     props: {
//       hotel: data.hotel,
//     },
//   };
// }

// export default SingleHotel;
