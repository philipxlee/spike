import React, { useState, useEffect } from 'react';

function TimerDisplay({ startTime, endTime }) {
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (!startTime) {
      setElapsed(0);
      return;
    }

    // If the game has ended, calculate the final elapsed time.
    if (endTime) {
      setElapsed(Math.floor((endTime - startTime) / 1000));
      return;
    }

    // Otherwise, update the elapsed time every second.
    const timer = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime, endTime]);

  if (!startTime) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '10px',
      right: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '5px 10px',
      borderRadius: '8px',
      fontSize: '18px',
      fontWeight: 'bold'
    }}>
      Time: {elapsed} {elapsed === 1 ? 'second' : 'seconds'}
    </div>
  );
}

export default TimerDisplay;