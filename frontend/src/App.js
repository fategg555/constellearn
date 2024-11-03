import logo from './logo.svg';
import './App.css';
import Header from './header';
import lesson from './lesson';
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import InfiniteScroll from './infinite-scroll';

function App() {
  const inLesson = false;

  return (
    <div className="App">
      <Header />
      { inLesson ? (
        <lesson />
      ) : (
        <InfiniteScroll />
      ) }
      <lesson />
    </div>
  );
}

export default App;