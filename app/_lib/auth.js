import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

// NextAuth configuration.
const authConfig = {
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	pages: { signIn: "login" },

	callbacks: {
		authorized({ auth }) {
			return auth?.user ? true : false;
		},
		// store user info into supabase
		async signIn({ user }) {
			try {
				const existingGuest = await getGuest(user.email);
				if (!existingGuest)
					await createGuest({ email: user.email, fullName: user.name });
				return true;
			} catch {
				return false;
			}
		},
	},
};

export const {
	auth, // check current info's user
	handlers: { GET, POST }, // request handlers
	signIn,
	signOut,
} = NextAuth(authConfig);

export default authConfig;
