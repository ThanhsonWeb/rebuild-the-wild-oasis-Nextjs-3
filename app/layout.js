import Header from "./_components/Header";
import { ReservationProvider } from "./contexts/ReservationContext";
import "./_styles/globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
	subsets: ["Latins"],
	weight: ["400", "700"],
	display: "swap",
});
export const metadata = {
	title: {
		template: `%s | The Wild Oasis`,
		default: "Welcome | The Wild Oasis",
	},
	description: "this is the best place to ....",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={` ${roboto.className} min-h-screen flex flex-col`}>
				<Header />
				<main className="flex-1 mx-auto w-full">
					<ReservationProvider>{children}</ReservationProvider>
				</main>
			</body>
		</html>
	);
}
