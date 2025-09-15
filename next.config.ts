import type { NextConfig } from "next";

const allowedDevOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://10.100.109.48:3000",
];

const nextConfig: NextConfig = {
    allowedDevOrigins,
};

export default nextConfig;
