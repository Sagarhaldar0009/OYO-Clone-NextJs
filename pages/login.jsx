"use client";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignup = async () => {
    const res = await axios.post(`/api/user/register`, {
      name,
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    const res = await axios.post(`/api/user/login`, {
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  const goToHome = () => {
    router.push("/"); // Navigate to the home page
  };

  return (
    <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex flex-col md:flex-row h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
        
        <div className="absolute w-full top-10 px-5 lg:px-20 text-white hidden sm:block">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">OYO</h2>
          <p className="font-bold text-lg lg:text-2xl sm:mb-4 md:mb-6">
            Hotels and homes across 800 cities, 24+ countries
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full lg:w-9/12">
          <div className="text-white text-center md:text-left px-5 lg:px-0">
            <p className="font-bold text-3xl md:text-5xl sm:mb-4 md:mb-6">
              There’s a smarter way to OYO around
            </p>
            <p className="text-lg md:text-2xl mt-5 sm:mb-4 md:mb-6">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
          <div className="bg-slate-50 rounded-lg shadow-lg w-full md:w-10/12 lg:w-8/12 mx-5 md:mx-10 lg:mx-0">
            <p className="h-10 flex items-center px-5 md:px-10 bg-gradient-to-r from-red-300 to-red-600 text-lg font-bold text-white rounded-t-lg">
              Sign up & Get ₹500 OYO Money
            </p>
            <div className="px-5 md:px-10 py-8">
              <h3 className="text-3xl md:text-5xl font-bold mb-5">
                Login / Signup
              </h3>
              <p className="font-bold text-lg mb-3">
                Please enter your details to continue
              </p>
              {!login && (
                <input
                  type="text"
                  placeholder="Enter your name..."
                  className="w-full outline-none border my-3 border-black px-3 py-2 rounded-md"
                  onChange={(e) => setName(e.target.value)}
                />
              )}
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full outline-none border my-3 border-black px-3 py-2 rounded-md"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter your password..."
                className="w-full outline-none border my-3 border-black px-3 py-2 rounded-md"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full h-14 text-lg font-bold bg-red-500 hover:bg-red-600 text-white my-5 rounded-lg transition-all"
                onClick={login ? handleLogin : handleSignup}
              >
                {login ? "Login" : "Sign Up"}
              </button>
              <p className="my-1 text-xl text-center">
                <span>
                  {login
                    ? "Don’t have an account?"
                    : "Already have an account?"}
                </span>
                <span
                  className="ml-1 text-red-600 border-b-2 border-red-500 cursor-pointer"
                  onClick={handleToggle}
                >
                  {login ? "Sign Up" : "Login"}
                </span>
              </p>
              {/* Add a button to go back to the home page */}
              <div className="mt-5">
                <button
                  onClick={goToHome}
                  className="w-full h-14 text-lg font-bold bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;





// "use client";
// import Head from "next/head";
// import { useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [login, setLogin] = useState(false);

//   const router = useRouter();

//   const handleSignup = async () => {
//     const res = await axios.post(`/api/user/register`, {
//       name,
//       email,
//       password,
//     });
//     if (res?.data) {
//       Cookies.set("user", res.data.token, { expires: 7 });
//       alert(res.data.msg);
//       router.back();
//     }
//   };

//   const handleToggle = () => {
//     setLogin(!login);
//   };

//   const handleLogin = async () => {
//     const res = await axios.post(`/api/user/login`, {
//       email,
//       password,
//     });
//     if (res?.data) {
//       Cookies.set("user", res.data.token, { expires: 7 });
//       alert(res.data.msg);
//       router.back();
//     }
//   };

//   return (
//     <div>
//       <Head>
//         <title>OYO - Login !</title>
//       </Head>
//       <div className="flex flex-col md:flex-row h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
        
//         <div className="absolute w-full top-10 px-5 lg:px-20 text-white hidden sm:block">
//   <h2 className="text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">OYO</h2>
//   <p className="font-bold text-lg lg:text-2xl sm:mb-4 md:mb-6">
//     Hotels and homes across 800 cities, 24+ countries
//   </p>
// </div>

//         <div className="flex flex-col-reverse md:flex-row justify-center items-center w-full lg:w-9/12">
//           <div className="text-white text-center md:text-left px-5 lg:px-0">
//             <p className="font-bold text-3xl md:text-5xl sm:mb-4 md:mb-6">
//               There’s a smarter way to OYO around
//             </p>
//             <p className="text-lg md:text-2xl mt-5 sm:mb-4 md:mb-6">
//               Sign up with your phone number and get exclusive access to
//               discounts and savings on OYO stays and with our many travel
//               partners.
//             </p>
//           </div>
//           <div className="bg-slate-50 rounded-lg shadow-lg w-full md:w-10/12 lg:w-8/12 mx-5 md:mx-10 lg:mx-0">
//             <p className="h-10 flex items-center px-5 md:px-10 bg-gradient-to-r from-red-300 to-red-600 text-lg font-bold text-white rounded-t-lg">
//               Sign up & Get ₹500 OYO Money
//             </p>
//             <div className="px-5 md:px-10 py-8">
//               <h3 className="text-3xl md:text-5xl font-bold mb-5">
//                 Login / Signup
//               </h3>
//               <p className="font-bold text-lg mb-3">
//                 Please enter your details to continue
//               </p>
//               {!login && (
//                 <input
//                   type="text"
//                   placeholder="Enter your name..."
//                   className="w-full outline-none border my-3 border-black px-3 py-2 rounded-md"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               )}
//               <input
//                 type="email"
//                 placeholder="Enter your email..."
//                 className="w-full outline-none border my-3 border-black px-3 py-2 rounded-md"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Enter your password..."
//                 className="w-full outline-none border my-3 border-black px-3 py-2 rounded-md"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="w-full h-14 text-lg font-bold bg-red-500 hover:bg-red-600 text-white my-5 rounded-lg transition-all"
//                 onClick={login ? handleLogin : handleSignup}
//               >
//                 {login ? "Login" : "Sign Up"}
//               </button>
//               <p className="my-1 text-xl text-center">
//                 <span>
//                   {login
//                     ? "Don’t have an account?"
//                     : "Already have an account?"}
//                 </span>
//                 <span
//                   className="ml-1 text-red-600 border-b-2 border-red-500 cursor-pointer"
//                   onClick={handleToggle}
//                 >
//                   {login ? "Sign Up" : "Login"}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;






// "use client";
// import Head from "next/head";
// import { useState } from "react";
// import axios from "axios";
// import Cookies from "js-cookie";
// import { useRouter } from "next/router";

// const Login = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [login, setLogin] = useState(false);

//   const router = useRouter();

//   const handleSignup = async () => {
//     const res = await axios.post(`/api/user/register`, {
//       name,
//       email,
//       password,
//     });
//     if (res?.data) {
//       Cookies.set("user", res.data.token, { expires: 7 });
//       alert(res.data.msg);
//       router.back();
//     }
//   };

//   const handleToggle = () => {
//     setLogin(!login);
//   };

//   const handleLogin = async () => {
//     const res = await axios.post(`/api/user/login`, {
//       email,
//       password,
//     });
//     if (res?.data) {
//       Cookies.set("user", res.data.token, { expires: 7 });
//       alert(res.data.msg);
//       router.back();
//     }
//   };

//   return (
//     <div>
//       <Head>
//         <title>OYO - Login !</title>
//       </Head>
//       <div className="flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85">
//         <div className=" absolute w-full top-10 px-20 flex items-center text-white">
//           <h2 className="text-5xl font-bold mr-5">OYO</h2>
//           <p className=" font-bold text-2xl  ">
//             Hotels and homes across 800 cities, 24+ countries
//           </p>
//         </div>
//         <div className="flex justify-center items-center w-9/12">
//           <div className=" text-white">
//             <p className=" font-bold text-5xl text-justify">
//               There’s a smarter way to OYO around
//             </p>
//             <p className=" text-2xl mt-5 text-justify">
//               Sign up with your phone number and get exclusive access to
//               discounts and savings on OYO stays and with our many travel
//               partners.
//             </p>
//           </div>
//           <div className=" ml-20 pb-40 w-10/12 border bg-slate-50">
//             <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white">
//               Sign up & Get ₹500 OYO Money
//             </p>
//             <div className="px-10">
//               <h3 className=" text-5xl font-bold my-5">Login / Signup</h3>
//               <p className=" font-bold text-lg mb-1">
//                 Please enter your phone number to continue
//               </p>
//               {login ? (
//                 ""
//               ) : (
//                 <input
//                   type="text"
//                   placeholder="Enter your name..."
//                   className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
//                   onChange={(e) => setName(e.target.value)}
//                 />
//               )}
//               <input
//                 type="email"
//                 placeholder="Enter your email..."
//                 className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="password"
//                 placeholder="Enter yourt password..."
//                 className=" outline-none border my-3 border-black px-3 py-1 w-96 h-10"
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className=" w-96 h-14 text-lg font-bold bg-red-500 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg"
//                 onClick={login ? handleLogin : handleSignup}
//               >
//                 {login ? "Login " : " Sign Up"}
//               </button>
//               <p className=" my-1 text-xl">
//                 <span>
//                   {login
//                     ? "Don`t have an account ?"
//                     : "Already have an account ?"}
//                 </span>
//                 <span
//                   className=" ml-1 border-b-2 border-red-500 text-red-600 pb-1 hover:cursor-pointer"
//                   onClick={handleToggle}
//                 >
//                   {" "}
//                   {login ? "Sign Up" : "Login"}
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;