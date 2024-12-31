// Deprecated Code
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     domains: [
//       "thumbs.dreamstime.com",
//       "images.oyoroomscdn.com",
//       "media.istockphoto.com",
//       "i.pinimg.com",
//       "www.symbols.com",
//       "cdn.pixabay.com",
//     ],
//   },
// };

// export default nextConfig;




// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "thumbs.dreamstime.com",
//       },
//       {
//         protocol: "https",
//         hostname: "images.oyoroomscdn.com",
//       },
//       {
//         protocol: "https",
//         hostname: "media.istockphoto.com",
//       },
//       {
//         protocol: "https",
//         hostname: "i.pinimg.com",
//       },
//       {
//         protocol: "https",
//         hostname: "www.symbols.com",
//       },
//       {
//         protocol: "https",
//         hostname: "cdn.pixabay.com",
//       },
//     ],
//   },
// };

// export default nextConfig;




/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;