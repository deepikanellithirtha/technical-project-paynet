import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: {
					label: "Username",
					type: "text",
					placeholder: "John smith",
				},
				password: {label: "Password", type: "password"},
			},
			async authorize(credentials, req) {
				if (
					credentials.username == "deepansh" &&
					credentials.password == "deepansh123"
				)
					 console.log("cewf");
				return {name: "deepansh"};
			},
		}),

		GoogleProvider({
			clientId: "process.env.GOOGLE_CLIENT_ID",
			clientSecret: "process.env.GOOGLE_CLIENT_SECRET",
		}),
	],
	callbacks: {
		async session({session}) {},
		async signIn({profile}) {

			
		},
	},
});
export {handler as GET, handler as POST};
