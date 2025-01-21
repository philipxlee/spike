import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartingPage({ setGameStartTime, resetGame }) {
  const navigate = useNavigate();

  const handleStart = () => {
    resetGame();
    setGameStartTime(Date.now());
    navigate('/circles');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome to the Clicking Game!</h1>
      <p style={{ fontSize: '18px' }}>
        When you press the button below, your game timer will start.
      </p>
      <button
        onClick={handleStart}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          fontWeight: 'bold',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#007BFF',
          color: '#fff',
          cursor: 'pointer',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={e => e.currentTarget.style.backgroundColor = '#0056b3'}
        onMouseOut={e => e.currentTarget.style.backgroundColor = '#007BFF'}
      >
        Start Game
      </button>
    </div>
  );
}

export default StartingPage;
