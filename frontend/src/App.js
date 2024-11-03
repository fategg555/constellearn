import logo from './logo.svg';
import './App.css';
import Header from './header';
import Lesson from './lesson';
import React, { useState } from "react";
import InfiniteScroll from './infinite-scroll';

function App() {
  const [isInLesson, setIsInLesson] = useState(false);

  // Function to handle the click event in InfiniteScroll
  const handleEnterLesson = () => {
    setIsInLesson(true);
  };

  const handleExitLesson = () => {
    setIsInLesson(false);
  };

  return (
    <div className="App">
      <Header onExitLesson={handleExitLesson} />
      { isInLesson ? (
        <Lesson />
      ) : (
        <InfiniteScroll onEnterLesson={handleEnterLesson} />
      )}
    </div>
  );
}

export default App;
