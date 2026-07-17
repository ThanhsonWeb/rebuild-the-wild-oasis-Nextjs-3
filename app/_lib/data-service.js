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
		console.error(error);
		throw new Error("Cabin could not be fetch");
	}

	return data;
}
