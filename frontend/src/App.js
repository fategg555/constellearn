import logo from './logo.svg';
import './App.css';
import Header from './header';
import React, { useState } from "react";
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
const provider = new GoogleAuthProvider();

function App() {
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
    <div className="App">
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <img src={user.photoURL} alt="User profile" />
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={handleSignIn}>Sign in with Google</button>
      )}
    </div>
  );
}

export default App;