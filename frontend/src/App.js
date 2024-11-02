import logo from './logo.svg';
import './App.css';
import Header from './header';
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;