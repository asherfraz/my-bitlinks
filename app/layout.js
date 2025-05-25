import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/component/Navbar";
import { Footer } from "@/component/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: "My-BitLinks - url shortener in Next.js",
	description: "A simple URL shortener built with Next.js",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Navbar />
				{/* <main className="mx-auto text-white bg-gradient-to-tr from-green-400 to-blue-500 min-h-screen -z-10 blur-sm"> */}

				<main className="relative mx-auto min-h-[83vh]">
					<div className="absolute inset-0 bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 blur-lg"></div>
					<div className="relative z-10 text-white">{children}</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
