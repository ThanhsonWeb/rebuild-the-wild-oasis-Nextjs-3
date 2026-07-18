import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

async function CabinList({ filter }) {
	const cabins = await getCabins();

	let displayedCabins;

	switch (filter) {
		case "all":
			displayedCabins = cabins;
			break;
		case "small":
			displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
			break;
		case "medium":
			displayedCabins = cabins.filter(
				(cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
			);
			break;
		case "large":
			displayedCabins = cabins.filter(
				(cabin) => cabin.maxCapacity >= 8 && cabin.maxCapacity <= 12,
			);
			break;

		default:
			displayedCabins = cabins;
	}

	return (
		<div>
			{displayedCabins.length > 0 && (
				<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
					{displayedCabins.map((cabin) => (
						<CabinCard cabin={cabin} key={cabin.id} />
					))}
				</div>
			)}
		</div>
	);
}

export default CabinList;
