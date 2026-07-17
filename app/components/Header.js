import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
	return (
		<header className=" flex items-center justify-between p-5  ">
			<Logo />
			<Navigation />
		</header>
	);
}

export default Header;
