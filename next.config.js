const withMDX = require('@next/mdx')({
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        // Reduced sizes for faster startup and processing
        deviceSizes: [640, 750, 828, 1080, 1200, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256],
    },
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Only transpile if actually needed - this can be very slow
    // Temporarily disabled for faster dev startup - uncomment if using Spline components
    // transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
    // Disable source maps in dev for faster compilation
    productionBrowserSourceMaps: false,
    // Optimize webpack for faster dev builds
    webpack: (config, { dev, isServer }) => {
        if (dev && !isServer) {
            // Reduce bundle size checks in dev mode
            config.optimization = {
                ...config.optimization,
                removeAvailableModules: false,
                removeEmptyChunks: false,
                splitChunks: false,
            }
        }
        return config
    },
}

module.exports = withMDX(nextConfig)
