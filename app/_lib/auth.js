import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// NextAuth configuration.
const authConfig = {
	providers: [
		GoogleProvider({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],

	callbacks: {
		authorized({ auth }) {
			console.log("AUTH:", auth);
			return auth?.user ? true : false;
		},
	},
};

export const {
	auth, // check current info's user
	handlers: { GET, POST },
	signIn,
	signOut,
} = NextAuth(authConfig);

export default authConfig;
