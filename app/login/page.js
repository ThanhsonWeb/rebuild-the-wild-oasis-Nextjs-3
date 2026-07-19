import Image from "next/image";
import { SignInAcTion } from "../_lib/actions";

export default function Page() {
	return (
		<div className="min-h-[80vh] flex items-center justify-center px-6">
			<div className="w-full max-w-md rounded-2xl border border-gray-100  p-10 ">
				<div className="flex flex-col items-center text-center space-y-6">
					<Image
						src="/logo.png"
						alt="The Wild Oasis"
						width={70}
						height={70}
						priority
					/>

					<div>
						<h1 className="text-3xl font-bold text-primary-100">
							Welcome Back 👋
						</h1>

						<p className="mt-3 text-primary-300 leading-relaxed">
							Sign in with your Google account to manage your reservations,
							update your profile,...
						</p>
					</div>

					<form action={SignInAcTion} className="w-full">
						<button
							className="flex w-full items-center justify-center gap-3 rounded-xl
              bg-white px-6 py-4 text-lg font-semibold text-gray-800
              transition-all duration-300 hover:scale-[1.02] hover:bg-gray-100"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 48 48"
								className="h-6 w-6"
							>
								<path
									fill="#FFC107"
									d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
								/>
								<path
									fill="#FF3D00"
									d="M6.3 14.7l6.6 4.8C14.7 15 19 12 24 12c3 0 5.8 1.1 7.9 2.9l5.7-5.7C34.1 6.1 29.3 4 24 4c-7.7 0-14.3 4.3-17.7 10.7z"
								/>
								<path
									fill="#4CAF50"
									d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2C29.2 35.6 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
								/>
								<path
									fill="#1976D2"
									d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.3 5.4-6.2 6.6l6.2 5.2C39.1 36.4 44 31 44 24c0-1.3-.1-2.3-.4-3.5z"
								/>
							</svg>
							Continue with Google
						</button>
					</form>

					<p className="text-sm text-primary-400">
						Secure authentication powered by Google
					</p>
				</div>
			</div>
		</div>
	);
}
