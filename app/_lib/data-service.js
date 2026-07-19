import { supabase } from "./supabase";

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
