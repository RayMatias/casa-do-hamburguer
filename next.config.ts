import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        poll: 1000,          // Checa por alterações a cada 1 segundo (1000ms)
        aggregateTimeout: 300, // Aguarda 300ms após a alteração antes de recompilar
      };
    }
    return config;
  },
};
module.exports = nextConfig;
export default nextConfig;