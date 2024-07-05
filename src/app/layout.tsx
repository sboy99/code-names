import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BaseLayout } from "@/components/layouts/base";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Code Names",
	description: "Code Names game",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} dark`}>
				<BaseLayout>{children}</BaseLayout>
			</body>
		</html>
	);
}
