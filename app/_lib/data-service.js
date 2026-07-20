import { supabase } from "./supabase";
// Countries Flag
import countriesData from "./countries.json";
export function getCountries() {
	return countriesData?.map((c) => ({
		name: c.name,
		flag: `https://flagcdn.com/w320/${c.code}.png`, // attach flag URL
	}));
}

// -------------------------------GET--------------
export async function getCabins() {
	const { data, error } = await supabase.from("cabins").select("*");

	if (error) {
		console.error(error);
		throw new Error("Cabins could not be loaded");
	}

	return data;
}

export async function getCabin(cabinId) {
	const { data, error } = await supabase
		.from("cabins")
		.select("*")
		.eq("id", cabinId)
		.single();

	if (error) {
		throw new Error("Cabin could not be fetch");
	}

	return data;
}

export async function getSettings() {
	const { data, error } = await supabase.from("settings").select("*").single();

	if (error) {
		throw new Error("Settings could not be fetch");
	}

	return data;
}

export async function getGuest(email) {
	const { data, error } = await supabase
		.from("guests")
		.select("*")
		.eq("email", email)
		.maybeSingle();
	if (error) throw error;

	return data;
}

export async function createGuest(newGuest) {
	const { data, error } = await supabase
		.from("guests")
		.insert(newGuest)
		.select()
		.single();

	if (error) {
		throw new Error("Guest could not be created");
	}

	return data;
}

export async function getBookings(guestId) {
	const { data, error } = await supabase
		.from("bookings")
		.select(` *,cabins(name, image)`)
		.eq("guestId", guestId);

	if (error) {
		throw new Error("bookings could not be fetch");
	}

	return data;
}
