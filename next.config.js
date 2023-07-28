/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["os.alipayobjects.com", "gw.alipayobjects.com"],
  },
};

module.exports = nextConfig;
