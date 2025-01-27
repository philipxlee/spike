import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CirclesPage() {
  const [circles, setCircles] = useState([]);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/circles/')
      .then(response => {
        console.log('API Response:', response.data);
        setCircles(response.data.circles);
        setCounter(response.data.circles.length);
      })
      .catch(error => {
        console.error('Error fetching circle data:', error);
      });
  }, []);

  const handleClick = (index) => {
    if (!circles[index]) {
      const updatedCircles = [...circles];
      updatedCircles[index] = true;
      setCircles(updatedCircles);
      setCounter(counter - 1);
    }
  };

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
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click all the circles!</h1>
      <h2>Remaining: {counter}</h2>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '20px'
      }}>
        {circles.map((clicked, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: clicked ? 'green' : 'red',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
      {counter === 0 && (
        <div>
          <h2>Well done! You clicked all the circles!</h2>
          <Link to="/squares">
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

export default CirclesPage;
