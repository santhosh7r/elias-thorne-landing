/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The portfolio uses plain <img>/<video> for parallax + hover control,
  // so the next/image lint rule is intentionally relaxed.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
