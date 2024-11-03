import logo from './logo.svg';
import './App.css';
import Header from './header';
import lesson from './lesson';
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import InfiniteScroll from './infinite-scroll';

function App() {
  return (
    <div className="App">
      <Header />
      <lesson />
    </div>
  );
}

export default App;