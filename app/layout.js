import Header from "./components/Header";
import "./globals.css";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="min-h-screen flex flex-col">
				<Header />
				<main className="flex-1 mx-auto w-full">{children}</main>
			</body>
		</html>
	);
}
