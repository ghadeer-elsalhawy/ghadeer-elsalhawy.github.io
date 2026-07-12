import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If deploying to https://<user>.github.io/<repo> instead of a custom domain
  // or a root user-page repo, uncomment and set these:
  // basePath: "/<repo-name>",
  // assetPrefix: "/<repo-name>/",
};

export default nextConfig;
