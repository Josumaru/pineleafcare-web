/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {

  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.supabase.co',
        port: '',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'down-id.img.susercontent.com',
        port: '',
        search: '',
      }
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
