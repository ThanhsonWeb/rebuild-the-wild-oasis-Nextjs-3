import { auth } from "@/app/_lib/auth";
import { getGuest } from "@/app/_lib/data-service";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export default async function Page() {
	const session = await auth();
	const guest = await getGuest(session?.user?.email);
	console.log(guest);

	return (
		<div>
			<h2 className="font-semibold text-2xl text-yellow-600 mb-4">
				Update your guest profile
			</h2>

			<p className="text-lg mb-8 ">
				Providing the following information will make your check-in process
				faster and smoother. See you soon!
			</p>
			<UpdateProfileForm guest={guest} />
		</div>
	);
}
