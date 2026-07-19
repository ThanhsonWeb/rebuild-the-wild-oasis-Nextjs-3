"use server";
import { signIn, signOut } from "./auth";

export async function SignInAcTion() {
	await signIn("google", { redirectTo: "/account" });
}

export async function SignOutAcTion() {
	await signOut({ redirectTo: "/" });
}
