import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import RoundedTriangle from '../helpers/RoundedTriangle';
import { buttonStyle, buttonHoverStyle } from '../helpers/ButtonStyles';

function TrianglesPage({ onGameFinish, resetGame }) {
  const [triangles, setTriangles] = useState([]);
  const [counter, setCounter] = useState(0);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get("https://spike-5ybw.onrender.com/api/triangles/")
      .then(response => {
        console.log('Triangle API Response:', response.data);
        const fetchedTriangles = response.data.triangles;
        setTriangles(fetchedTriangles);
        setCounter(fetchedTriangles.length);

        const initialPositions = fetchedTriangles.map(() => ({
          left: Math.random() * 90 + 'vw',
          top: (Math.random() * 60 + 20) + 'vh'
        }));
        setPositions(initialPositions);
      })
      .catch(error => {
        console.error('Error fetching triangle data:', error);
      });
  }, []);

  const handleClick = (index) => {
    if (!triangles[index]) {
      const updatedTriangles = [...triangles];
      updatedTriangles[index] = true;

      // Generate new positions for all unclicked triangles
      const newPositions = positions.map((pos, i) => {
        if (updatedTriangles[i]) {
          return pos; // Keep clicked triangles' positions
        }
        return {
          left: Math.random() * 90 + 'vw',
          top: (Math.random() * 60 + 20) + 'vh'
        };
      });

      setTriangles(updatedTriangles);
      setCounter(counter - 1);
      setPositions(newPositions);
    }
  };

  useEffect(() => {
    if (triangles.length > 0 && counter === 0 && typeof onGameFinish === 'function') {
      onGameFinish();
    }
  }, [counter, onGameFinish, triangles]);

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Click all the triangles!</h1>
      <h2 style={{ textAlign: 'center' }}>Remaining: {counter}</h2>
      {triangles.map((clicked, index) => (
        <RoundedTriangle
          key={index}
          clicked={clicked}
          onClick={() => handleClick(index)}
          style={{
            position: 'absolute',
            left: positions[index]?.left || '0px',
            top: positions[index]?.top || '0px',
            transition: 'all 0.5s ease-out',
          }}
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      ))}
      {counter === 0 && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center'
        }}>
          <h2>Well done! You clicked all the triangles!</h2>
          <Link to="/">
            <button
              style={buttonStyle}
              onClick={resetGame}
              onMouseOver={e => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseOut={e => Object.assign(e.target.style, { backgroundColor: '#007BFF' })}
            >
              Play Again
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TrianglesPage;