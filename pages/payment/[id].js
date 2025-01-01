import axios from "axios";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Payment = () => {
  const router = useRouter();
  
  const makePayment = async () => {
    console.log("Hotel ID:", router.query?.id); // Log the value of the `id`
    const val = {
      id: router.query?.id,
    };

    // Ensure `val.id` is not undefined
  if (!val.id) {
    console.error("ID is not available");
    return;
  }

    const { data } = await axios.post(`/api/razorpay`, val);

    const options = {
      key: process.env.RAZORPAY_KEY,
      name: "Sagar Haldar",
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: "Thank You !",
      handler: function (response) {},
      prefill: {
        name: "Sagar Haldar",
        email: "sagarhaldar987@gmail.com",
        contact: 9625813605,
      },
    };

    const paymentObj = new window.Razorpay(options);
    paymentObj.open();
  };

  useEffect(() => {
    makePayment();
  }, []);

  return (
    <>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
};

export default Payment;




// import { useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import Script from "next/script";

// const Payment = () => {
//   const [loading, setLoading] = useState(false); // Track if the payment is in progress
//   const router = useRouter();
  
//   const makePayment = async () => {
//     setLoading(true); // Set loading true when payment starts
//     try {
//       const val = {
//         id: router.query?.id,
//       };
//       const { data } = await axios.post(`/api/razorpay`, val);

//       const options = {
//         key: process.env.RAZORPAY_KEY,
//         name: "Sagar Haldar",
//         currency: data.currency,
//         amount: data.amount,
//         order_id: data.id,
//         description: "Thank You !",
//         handler: function (response) {
//           // Handle success here
//         },
//         prefill: {
//           name: "Sagar Haldar",
//           email: "sagarhaldar987@gmail.com",
//           contact: 9625813605,
//         },
//       };

//       const paymentObj = new window.Razorpay(options);
//       paymentObj.open();
//     } catch (error) {
//       console.error("Error initiating Razorpay payment:", error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <button
//         onClick={makePayment}
//         disabled={loading}
//         className="w-60 sm:w-72 h-14 bg-red-500 text-white rounded-lg text-lg hover:bg-red-600 transition-all"
//       >
//         {loading ? "Processing..." : "Book Now"}
//       </button>
//       <Script src="http://checkout.razorpay.com/v1/checkout.js" />
//     </>
//   );
// };

// export default Payment;