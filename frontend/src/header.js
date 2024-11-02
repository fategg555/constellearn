import React, { useState } from 'react';
import user, { handles } from './App.js';
import './header.css';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDBr0xS9zNdz2cpvFOuDw9S0cjYgxIUWuM",
  authDomain: "constellearn.firebaseapp.com",
  projectId: "constellearn",
  storageBucket: "constellearn.firebasestorage.app",
  messagingSenderId: "457762135766",
  appId: "1:457762135766:web:75b10bcf58844099a57377",
  measurementId: "G-5TR3MN7KC8",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

function Header() {
    const [user, setUser] = useState(null);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user); // Set user information after successful login
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };
  
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null); // Clear user information after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
    return (
        <header> 
            <img src="../public/menu-icon.png" alt="menu icon"></img>
            <div class="center">
                <h1> Constellearn </h1>
            </div>
            <div class="user"> 
                { user ? ( 
                    <>
                        <img src={user.photoURL} alt="User profile" />
                        <p> {user.displayName} </p>
                        <button onClick={handleSignOut}> Sign Out </button>
                    </>
                ) : ( 
                    <button onClick={handleSignIn}> Sign in with Google </button>
                )
                }
            </div>
        </header>
    )
}

export default Header;