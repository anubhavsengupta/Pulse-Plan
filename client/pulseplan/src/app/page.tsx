"use client";
import { useEffect, useState } from 'react';
import Form from '@/components/Form';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedInStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loggedInStatus === 'true');
    }
  }, []);
  if (!isLoggedIn) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
          Pulse Plan
        </div>
        {isLoggedIn ? <h2>Hi there.</h2> : ""}
      </main>
    );
  } else {
    return (
      <>  
      <h1>Hi there.</h1>
      <Form></Form>
      </>
    )
  }
}
