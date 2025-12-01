/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Requis pour output: 'export'
  },
};

module.exports = nextConfig;
