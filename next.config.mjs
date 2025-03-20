/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'm.media-amazon.com',
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
            },
            {
                protocol: 'https',
                hostname: 'fakestoreapi.in',
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
            },
        ],
    },
};

export default nextConfig;
