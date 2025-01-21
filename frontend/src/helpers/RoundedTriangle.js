import React from 'react';

function RoundedTriangle({ clicked, style, onClick, onMouseOver, onMouseOut }) {
  const fillColor = clicked ? 'limegreen' : 'red';

  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 100 100"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      style={{ cursor: 'pointer', ...style }}
    >
      <polygon
        points="50,10 90,85 10,85"
        fill={fillColor}
        stroke={fillColor}
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RoundedTriangle;
