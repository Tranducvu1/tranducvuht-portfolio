import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',  // Sử dụng cấu hình 'export' thay vì next export
  experimental: {
    // Nếu bạn muốn sử dụng các tính năng thử nghiệm, bạn có thể bật tại đây
    // reactCompiler: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'pbs.twimg.com' },
      { hostname: 'yt3.googleusercontent.com' },
      { hostname: 'cdn.prod.website-files.com' },
      { hostname: 'assets.aceternity.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
}

export default nextConfig
