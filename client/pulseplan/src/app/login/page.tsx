'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/state/store'
import { login } from '@/state/user/userSlice'


export default function Login() {
  const router = useRouter();
  const userStatus = useSelector((state: RootState) => state.user.value);
  const userId = useSelector((state: RootState) => state.user.id);
  // connect to dispatcher
  const dispatch = useDispatch();
  function handleLogin(e: { preventDefault: () => void; }) {
    e.preventDefault();
    const authorize = async (credentials: any) => {
      const res = await fetch("http://localhost:8080/api/v1/auth/login", {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: { "Content-Type": "application/json" }
      })
      console.log(res);
      if (res.ok && res.body) {
        dispatch(login());
        console.log("status: ", userStatus)
        localStorage.setItem('isLoggedIn', 'true');
        router.push("/")
      } else {
        setUsername("");
        setPassword("");
      }
    }
    const credential = {firstName: "", lastName: "", username: username, password: password}
    authorize(credential);
  }

  useEffect(() => {
    if (userStatus) {
      console.log("Updated status: ", userStatus);
      router.push("/");
    }
  }, [userStatus]);


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Login to Your Account {userId}</h2>
          <form className="space-y-6" onSubmit={(e) => {handleLogin(e)}}>
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
                value={password}
                required
                className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                onChange={(e) => {setPassword(e.target.value)}}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link href="/signup" className="text-blue-500 hover:underline">
                Sign Up
             </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }
  