"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Button from "./Button";

function Filter() {
	const searchParams = useSearchParams();
	const activeFilter = searchParams.get("capacity");
	console.log(activeFilter);
	const router = useRouter();
	const pathname = usePathname();
	function handlerFilter(filter) {
		const params = new URLSearchParams(searchParams);
		params.set("capacity", filter);

		router.replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="flex justify-end my-4">
			<Button
				onClick={() => handlerFilter("all")}
				filter="all"
				activeFilter={activeFilter}
			>
				All cabins
			</Button>
			<Button
				onClick={() => handlerFilter("small")}
				filter="small"
				activeFilter={activeFilter}
			>
				1 - 3 guests
			</Button>
			<Button
				onClick={() => handlerFilter("medium")}
				filter="medium"
				activeFilter={activeFilter}
			>
				4 - 7 guests
			</Button>
			<Button
				onClick={() => handlerFilter("large")}
				filter="large"
				activeFilter={activeFilter}
			>
				8 - 12 guests
			</Button>
		</div>
	);
}

export default Filter;
