import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RoundedTriangle from './components/RoundedTriangle';

function TrianglesPage() {
  const [triangles, setTriangles] = useState([]);
  const [counter, setCounter] = useState(0);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/triangles/')
      .then(response => {
        console.log('Triangle API Response:', response.data);
        const fetchedTriangles = response.data.triangles;
        setTriangles(fetchedTriangles);
        setCounter(fetchedTriangles.length);

        // Generate random positions for each triangle.
        const newPositions = fetchedTriangles.map(() => ({
          left: Math.random() * 90 + 'vw',              // between 0 and 90vw
          top: (Math.random() * 60 + 20) + 'vh'         // between 20vh and 80vh
        }));
        setPositions(newPositions);
      })
      .catch(error => {
        console.error('Error fetching triangle data:', error);
      });
  }, []);

  const handleClick = (index) => {
    if (!triangles[index]) {
      const updatedTriangles = [...triangles];
      updatedTriangles[index] = true;
      setTriangles(updatedTriangles);
      setCounter(counter - 1);
    }
  };

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
            left: positions[index] ? positions[index].left : '0px',
            top: positions[index] ? positions[index].top : '0px',
            transition: 'transform 0.2s',
          }}
          // Add hover effects: scale up on mouse over.
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        />
      ))}
      {counter === 0 && (
        <h2 style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: '20px',
          width: '100%'
        }}>
          Well done! You clicked all the triangles!
        </h2>
      )}
    </div>
  );
}

export default TrianglesPage;
