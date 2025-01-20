import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CirclesPage from './CirclesPage';
import TrianglesPage from './TrianglesPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Root path shows the circles page */}
        <Route path="/" element={<CirclesPage />} />
        {/* /triangles shows the triangles page */}
        <Route path="/triangles" element={<TrianglesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
