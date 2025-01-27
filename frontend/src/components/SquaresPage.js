import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function SquaresPage() {
  const [squares, setSquares] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/squares/')
      .then(response => {
        console.log('API Response:', response.data);
        setSquares(response.data.squares);
        setCounter(response.data.squares.length);
      })
      .catch(error => {
        console.error('Error fetching square data:', error);
      });
  }, []);

  const handleClick = (index) => {
    if (!squares[index]) {
      const updateSquares = [...squares];
      updateSquares[index] = true;
      setSquares(updateSquares);
      setCounter(counter - 1);
    }
  };

  const columns = 5;
  const squaresPerColumn = Math.ceil(squares.length / columns);
  const columnsArray = Array.from({ length: columns }, (_, i) =>
    squares.slice(i * squaresPerColumn, (i + 1) * squaresPerColumn)
  );

  const buttonStyle = {
    padding: '10px 15px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginTop: '5px',
    transition: 'background-color 0.3s',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', overflow: 'hidden' }}>
      <style>
        {`
          @keyframes moveLeft {
            0% { transform: translateX(-50vw); }
            100% { transform: translateX(50vw); }
          }
          @keyframes moveRight {
            0% { transform: translateX(50vw); }
            100% { transform: translateX(-50vw); }
          }
          .move-left { animation: moveLeft 8s linear infinite; }
          .move-right { animation: moveRight 8s linear infinite; }
        `}
      </style>

      <h1>Click all the squares!</h1>
      <h2>Remaining: {counter}</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '40px'
      }}>
        {columnsArray.map((column, columnIndex) => (
          <div
            key={columnIndex}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            {column.map((clicked, squareIndex) => (
              <div
                key={squareIndex}
                onClick={() => handleClick(columnIndex * squaresPerColumn + squareIndex)}
                className={!clicked ? (squareIndex % 2 === 0 ? 'move-left' : 'move-right') : ''}
                style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: clicked ? 'green' : 'red',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              />
            ))}
          </div>
        ))}
      </div>
      {counter === 0 && (
        <div>
          <h2>Well done! You clicked all the squares!</h2>
          <Link to="/triangles">
            <button
              style={buttonStyle}
              onMouseOver={e => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseOut={e => Object.assign(e.target.style, { backgroundColor: '#007BFF' })}
            >
              Next: Triangles
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default SquaresPage;