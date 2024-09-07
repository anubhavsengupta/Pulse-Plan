import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
        <nav className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                
                <div className="text-xl font-bold">MyApp</div>
                
        
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="hover:bg-blue-700 p-2 rounded">Home</Link>
                    <Link href="/signup" className="hover:bg-blue-700 p-2 rounded">Sign Up</Link>
                    <Link href="/login" className="bg-white text-blue-500 hover:bg-gray-200 p-2 rounded">Login</Link>
                </div>

                <div className="md:hidden">
                <button className="text-white">Menu</button>
                </div>
            </div>
        </nav>
  )
}

export default Navbar