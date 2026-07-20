"use server";
import { closestIndexTo } from "date-fns";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function SignInAcTion() {
	await signIn("google", { redirectTo: "/account" });
}

export async function SignOutAcTion() {
	await signOut({ redirectTo: "/" });
}

export async function UpdateProfile(formData) {
	// Authentication
	const session = await auth();
	if (!session) throw new Error("Login first please");

	// get value base on name
	const nationalID = formData.get("nationalID");
	const [nationality, countryFlag] = formData.get("nationality").split("%");

	const updateGuest = { nationalID, nationality, countryFlag };
	console.log(updateGuest);

	// Update to supabase
	const { data, error } = await supabase
		.from("guests")
		.update(updateGuest)
		.eq("email", session?.user?.email);
	if (error) throw new Error("Could not update Guest ! ");

	// RevalidatePath
	revalidatePath("/account/profile");
}

export async function DeleteBooking(bookingId) {
	// Authentication
	const session = await auth();
	if (!session) throw new Error("Please log in first.");

	const guest = await getGuest(session.user.email);

	const { data, error } = await supabase
		.from("bookings")
		.delete()
		.eq("id", bookingId)
		.eq("guestId", guest.id);
	if (error) throw new Error("Could not Delete Booking ! ");

	// RevalidatePath
	revalidatePath("/account/reservations");
}

export async function UpdateBooking(formData) {
	// Authentication
	const session = await auth();
	if (!session) throw new Error("Please log in first.");
	// get value base on name
	const observations = formData.get("observations").slice(0, 1000);
	const numGuests = Number(formData.get("numGuests"));
	const bookingId = Number(formData.get("bookingId"));

	const updateReservation = { observations, numGuests };

	// Update to supabase
	const { data, error } = await supabase
		.from("bookings")
		.update(updateReservation)
		.eq("id", bookingId);
	if (error) throw new Error("Could not update Booking ! ");

	// RevalidatePath
	redirect("/account/reservations");
}
