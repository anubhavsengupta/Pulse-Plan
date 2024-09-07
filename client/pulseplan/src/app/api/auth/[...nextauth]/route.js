import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [CredentialsProvider({
    // The name to display on the sign in form (e.g. 'Sign in with...')
    name: 'Credentials',
    credentials: {
      firstName: { label: "First Name", type: "text"},
      lastName: { label: "Last Name", type: "text"},
      username: { label: "Username", type: "text", placeholder: "jsmith" },
      password: { label: "Password", type: "password" }
    },
    async authorize(credentials, req) {
      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      const user = await res.json()

      // If no error and we have user data, return it
      if (res.ok && user) {
        return user
      }
      // Return null if user data could not be retrieved
      return null
    }
  })
  ],
  session: {
    jwt: true,
  },
});