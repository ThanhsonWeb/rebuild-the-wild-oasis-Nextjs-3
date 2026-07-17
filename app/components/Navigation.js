import Link from "next/link";

function Navigation() {
	return (
		<nav>
			<ul className="flex items-center justify-around gap-5 text-xl">
				<li className="px-3">
					<Link href="/cabins">Cabins</Link>
				</li>
				<li className="px-3">
					<Link href="/about">About</Link>
				</li>
				<li className="px-3">
					<Link href="/account">Account</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
