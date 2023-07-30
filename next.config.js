/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "os.alipayobjects.com",
      "gw.alipayobjects.com",
      "avatars.githubusercontent.com",
      "www.startech.com.bd",
      "i.ibb.co",
    ],
  },
};

module.exports = nextConfig;
