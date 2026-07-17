import SideNavigation from "../components/SideNavigation";

function layout({ children }) {
	return (
		<div className="grid grid-cols-[15rem_1fr] m-10 gap-5 ">
			<div>
				<SideNavigation />
			</div>
			<div>{children}</div>
		</div>
	);
}

export default layout;
