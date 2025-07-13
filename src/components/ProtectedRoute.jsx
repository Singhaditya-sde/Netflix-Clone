import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { auth, db } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

const ProtectedRoute = ({ children }) => {
    const [isPremiumUser, setIsPremiumUser] = useState(null); // null = loading, true/false = status
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsAuthenticated(true);
                // User is signed in, now check their premium status
                const userDocRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(userDocRef);
                if (docSnap.exists() && docSnap.data().isPremium === true) {
                    setIsPremiumUser(true);
                } else {
                    setIsPremiumUser(false);
                }
            } else {
                // User is signed out
                setIsAuthenticated(false);
            }
        });
        
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // Show a loading screen while we check auth and premium status
    if (isPremiumUser === null || isAuthenticated === null) {
        return <div className="h-screen bg-black flex justify-center items-center text-white">Loading...</div>;
    }

    // If user is not logged in, redirect to login
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    
    // If user is logged in but not premium, redirect to subscribe
    if (!isPremiumUser) {
        return <Navigate to="/subscribe" />;
    }

    // If everything is good, show the protected content
    return children;
};

export default ProtectedRoute;