import logo from './logo.svg';
import './App.css';
import Header from './header';
import Lesson from './lesson';
import React, { useState } from "react";
import InfiniteScroll from './infinite-scroll';

function App() {
  const inLesson = false;

  return (
    <div className="App">
      <Header />
      { inLesson ? (
        <Lesson />
      ) : (
        <InfiniteScroll />
      ) }
    </div>
  );
}

export default App;