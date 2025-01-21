import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartingPage from './components/StartingPage';
import CirclesPage from './components/CirclesPage';
import TrianglesPage from './components/TrianglesPage';
import TimerDisplay from './helpers/TimeDisplay';

function App() {
  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameEndTime, setGameEndTime] = useState(null);

  const handleGameFinish = () => {
    if (!gameEndTime) {
      setGameEndTime(Date.now());
    }
  };

  // Reset both start and end times
  const resetGame = () => {
    setGameStartTime(null);
    setGameEndTime(null);
  };

  return (
    <Router>
      <TimerDisplay startTime={gameStartTime} endTime={gameEndTime} />
      <Routes>
        {/* Pass both resetGame and setGameStartTime to the starting page */}
        <Route path="/" element={<StartingPage setGameStartTime={setGameStartTime} resetGame={resetGame} />} />
        <Route path="/circles" element={<CirclesPage />} />
        <Route path="/triangles" element={<TrianglesPage onGameFinish={handleGameFinish} resetGame={resetGame} />} />
      </Routes>
    </Router>
  );
}

export default App;
