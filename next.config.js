/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, swcMinify: true, async redirects() {
        return [{
            source: '/home', destination: 'https://uxfol.io/harman', permanent: false
        }]
    }
}

module.exports = nextConfig
