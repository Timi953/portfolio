import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";
// import Chat from "@/components/Chat"; // Chat feature temporarily disabled
import ClientTopProgressBar from "@/components/ClientTopProgressBar";
import { ThemeProvider } from "@/context/ThemeContext";

export const metadata = {
    title: "Timi Olumcev | Portfolio",

    description:
		"I'm Timi Olumcev, a Full Stack AI Developer from Skopje, North Macedonia. I specialize in AI-powered SaaS/PaaS solutions, LLM integrations, and automation.",

    author: "Timi Olumcev",
    siteUrl: "http://localhost:3000",
    applicationName: "Timi Olumcev",

    keywords: [
		"timi olumcev",
		"timi",
		"olumcev",
		"full stack ai developer",
		"ai automation",
		"llm integration",
		"skopje developer",
		"north macedonia developer",
		"ai saas",
		"automation developer",
	],

    openGraph: {
		type: "website",
		url: "http://localhost:3000",
		title: "Timi Olumcev | Portfolio",
		site_name: "Timi Olumcev | Portfolio",
		description: "I'm Timi Olumcev, a Full Stack AI Developer specializing in AI-powered solutions and intelligent automation.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Timi Olumcev Portfolio",
			},
		],
		site_name: "Timi Olumcev | Portfolio",
	}
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<ThemeProvider>
					<ClientTopProgressBar />
					<Navbar />
					{children}
					{/* <Chat /> Chat feature temporarily disabled */}
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
