"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import Button from "./Button";

function Filter() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	function handlerFilter(filter) {
		const params = new URLSearchParams(searchParams);
		params.set("capacity", filter);

		router.replace(`${pathname}?${params.toString()}`);
	}

	return (
		<div className="flex justify-end my-4">
			<Button onClick={() => handlerFilter("all")}>All cabins</Button>
			<Button onClick={() => handlerFilter("small")}>1 - 3 guests</Button>
			<Button onClick={() => handlerFilter("medium")}>4 - 7 guests</Button>
			<Button onClick={() => handlerFilter("large")}>8 - 12 guests</Button>
		</div>
	);
}

export default Filter;
