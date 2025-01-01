// "use client";
// import Image from "next/image";
// import Block from "./Block";
// import Link from "next/link";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";

// const Header1 = () => {
//   const [auth, setAuth] = useState(false);

//   useEffect(() => {
//     const key = Cookies.get("user");
//     if(key){
//       setAuth(true);
//       return;
//     }
//     setAuth(false);
//   }, [auth]);
  
//   const router = useRouter();

//   const handleLogout = () => {
//     Cookies.remove("user");
//     setAuth(false);
//     router.push("/");
//   };
//   return (
//     <div className=" flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
//       <Link href="/" passHref>
//         <Image
//           src="/logo.png"
//           alt="logo"
//           width={200}
//           height={200}
//           className="w-28 h-28 cursor-pointer"
//         />
//       </Link>
//       <div className=" h-full flex">
//         <Block title={"Become a member"} para={"Additional 0% off on stays."} img={"/letter-w.png"} />
//         <Block title={"OYO for business"} para={"Trusted by 5000 corporates."} img={"/suitcase.png"} />
//         <Block title={"List your property"} para={"Start earning in 30 min."} img={"/building.png"}/>
//         <Block title={"987654321"} para={"Call us to book now."} img={"/phone-call.png"} />
//         <div className="flex items-center px-3 ">
//           <Image
//             src={"/user.png"}
//             alt="demo"
//             width={200}
//             height={200}
//             className=" w-10 h-10 rounded-full mr-5"
//           />
//           {auth ? (
//             <h3
//               className=" font-bold cursor-pointer"
//               onClick={handleLogout}
//             >
//               Logout
//             </h3>
//           ) : (
//             <Link href={"/login"} className=" font-bold">
//               Login / Signup
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header1;



"use client";
import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
      return;
    }
    setAuth(false);
  }, [auth]);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className="flex justify-between items-center border-b-2 border-gray-300 h-24 px-5 sm:px-10">
      {/* Logo */}
      <Link href="/" passHref>
        <Image
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          className="w-20 h-20 sm:w-28 sm:h-28 cursor-pointer"
        />
      </Link>

      {/* Large Screen Blocks */}
      <div className="hidden sm:flex h-full">
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

      {/* User Section */}
      <div className="flex items-center">
        <Image
          src={"/user.png"}
          alt="demo"
          width={200}
          height={200}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
        />
        {auth ? (
          <h3
            className="font-bold cursor-pointer text-sm sm:text-base"
            onClick={handleLogout}
          >
            Logout
          </h3>
        ) : (
          <Link href={"/login"} className="font-bold text-sm sm:text-base">
            Login / Signup
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header1;