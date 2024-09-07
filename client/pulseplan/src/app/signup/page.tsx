// signup
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function SignUp() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const router = useRouter();
    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log(firstName);
        const createUser = async (credentials: any) => {
          const res = await fetch("http://localhost:8080/api/v1/users", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          console.log(res);
          if (res.ok && res.body) {
            router.push("/")
          } else {

            setUsername("");
            setPassword("");
          }
        }
        const credential = {firstName: firstName, lastName: lastName, username: username, password: password}
        createUser(credential); 
      }


    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                required
                value={firstName}
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => {setFirstName(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                required
                value={lastName}
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => {setLastName(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                value={username}
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => {setUsername(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={password}
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                value={confirmPassword}
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => {setConfirmPassword(e.target.value)}}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"

              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500 hover:underline">
                Log in
             </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  