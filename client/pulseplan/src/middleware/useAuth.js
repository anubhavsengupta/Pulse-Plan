// custom hook for middleware-like functionality
import { useState, useEffect } from 'react'


const useAuth = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const loggedInStatus = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(loggedInStatus === 'true');
        }
    })
    return isLoggedIn;
}

export default useAuth;
