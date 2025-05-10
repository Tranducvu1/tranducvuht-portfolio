import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',  // Sử dụng cấu hình 'export' thay vì next export
  
  // Thêm trailingSlash để tránh vấn đề với đường dẫn trên Amplify
  trailingSlash: true,
  
  experimental: {
    // Nếu bạn muốn sử dụng các tính năng thử nghiệm, bạn có thể bật tại đây
    // reactCompiler: true,
  },
  
  images: {
    // Thêm unoptimized: true cho static export
    unoptimized: true,
    
    // Giữ remotePatterns cho phép tải hình ảnh từ các domain bên ngoài
    remotePatterns: [
      { hostname: 'pbs.twimg.com' },
      { hostname: 'yt3.googleusercontent.com' },
      { hostname: 'cdn.prod.website-files.com' },
      { hostname: 'assets.aceternity.com' },
      { hostname: 'images.unsplash.com' },
    ],
  },
  
  // Ngăn chặn việc tạo thư mục .git trong quá trình build
  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /node_modules|\.git/,
    };
    return config;
  },
}

export default nextConfig