/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com', 'wembleypark.com', 'source.unsplash.com', 'unsplash.com', 'u.ae.com'],
  },
}; 

module.exports = nextConfig;
