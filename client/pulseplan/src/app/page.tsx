"use client";
import { useEffect, useState } from 'react';


export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedInStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedInStatus === 'true');
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Pulse Plan
      </div>
      {isLoggedIn ? <h2>Hi there.</h2> : ""}
    </main>
  );
}
