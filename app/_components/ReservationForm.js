"use client";

import Image from "next/image";
import ButtonSubmit from "./ButtonSubmit";
import { useReservation } from "../contexts/ReservationContext";
import { differenceInDays } from "date-fns";
import { createBooking } from "../_lib/actions";

function ReservationForm({ cabin, user }) {
	const { range } = useReservation();

	const { maxCapacity, regularPrice, discount, id } = cabin;

	const startDate = range?.from;
	const endDate = range?.to;
	const numNights = differenceInDays(endDate, startDate);
	const cabinPrice = numNights * (regularPrice - discount);

	//
	const bookingData = {
		cabinId: id,
		startDate,
		endDate,
		numNights,
		cabinPrice,
	};

	//

	const createBookingWithData = createBooking.bind(null, bookingData);

	return (
		<div className="scale-[1.01]">
			<div className="bg-gray-800 text-gray-300 px-16 py-2 flex justify-between items-center">
				<p>Logged in as</p>

				<div className="flex gap-4 items-center">
					<Image
						referrerPolicy="no-referrer"
						className="h-8 rounded-full"
						width={30}
						height={30}
						src={user?.image}
						alt={user?.name}
					/>
					<p>{user.name}</p>
				</div>
			</div>

			<form
				action={createBookingWithData}
				className="bg-gray-900 py-10 px-16 text-lg flex gap-5 flex-col"
			>
				<div className="space-y-2">
					<label htmlFor="numGuests">How many guests?</label>
					<select
						name="numGuests"
						id="numGuests"
						className="px-5 py-3 bg-gray-200 text-gray-800 w-full shadow-sm rounded-sm"
						required
					>
						<option value="" key="">
							Select number of guests...
						</option>
						{Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
							<option value={x} key={x}>
								{x} {x === 1 ? "guest" : "guests"}
							</option>
						))}
					</select>
				</div>

				<div className="space-y-2">
					<label htmlFor="observations">
						Anything we should know about your stay?
					</label>
					<textarea
						name="observations"
						id="observations"
						className="px-5 py-3 bg-gray-200 text-gray-800 w-full shadow-sm rounded-sm"
						placeholder="Any pets, allergies, special requirements, etc.?"
					/>
				</div>

				<div className="flex justify-end items-center gap-6">
					<p className="text-gray-300 text-base">Start by selecting dates</p>

					<ButtonSubmit disabled={!startDate || !endDate}>
						Book Now
					</ButtonSubmit>
				</div>
			</form>
		</div>
	);
}

export default ReservationForm;
