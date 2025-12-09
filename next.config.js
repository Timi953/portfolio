const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "i.scdn.co",
			},
		],
		formats: ["image/avif", "image/webp"],
		minimumCacheTTL: 31536000,
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
		imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
	},
	async headers() {
		return [
			{
				source: "/sitemap.xml.gz",
				headers: [
					{
						key: "Content-Type",
						value: "application/gzip",
					},
					{
						key: "Cache-Control",
						value: "public, max-age=3600",
					},
				],
			},
			{
				source: "/:path*",
				headers: [
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-XSS-Protection",
						value: "1; mode=block",
					},
				],
			},
		];
	},
	reactStrictMode: true,
	compiler: {
		removeConsole:
			process.env.NODE_ENV === "production"
				? {
						exclude: ["error", "warn"],
				  }
				: false,
	},
};

// Only wrap with bundle analyzer when analyzing builds
// This prevents the require from failing in production where @next/bundle-analyzer isn't installed
if (process.env.ANALYZE === "true") {
	const withBundleAnalyzer = require("@next/bundle-analyzer")({
		enabled: true,
	});
	module.exports = withBundleAnalyzer(nextConfig);
} else {
	module.exports = nextConfig;
}
