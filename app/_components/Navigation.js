import Link from "next/link";
import { auth } from "../_lib/auth";
import Image from "next/image";

async function Navigation() {
	const session = await auth();

	return (
		<nav className="z-10 text-xl">
			<ul className="flex gap-16 items-center">
				<li>
					<Link
						href="/cabins"
						className="hover:text-accent-400 transition-colors"
					>
						Cabins
					</Link>
				</li>
				<li>
					<Link
						href="/about"
						className="hover:text-accent-400 transition-colors"
					>
						About
					</Link>
				</li>
				{session ? (
					<div className="flex items-center gap-3">
						<Image
							src={session?.user?.image}
							width={30}
							height={30}
							className="rounded-xl"
							alt="user's image"
						/>
						<li>
							<Link
								href="/account"
								className="hover:text-accent-400 transition-colors"
							>
								Guest Area
							</Link>
						</li>
					</div>
				) : (
					<li>
						<Link
							href="/account"
							className="hover:text-accent-400 transition-colors"
						>
							Guest Area
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Navigation;
