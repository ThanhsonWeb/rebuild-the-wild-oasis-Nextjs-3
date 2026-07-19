import { getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
	const settings = await getSettings();
	console.log(settings);
   console.log(cabin)

	return (
		<div className="grid lg:grid-cols-[1fr_1fr] gap-3">
			<DateSelector cabin={cabin} settings={settings} />
			<ReservationForm />
		</div>
	);
}

export default Reservation;
