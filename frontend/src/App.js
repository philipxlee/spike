import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/hello/') // Backend API endpoint
            .then(response => setMessage(response.data.message))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{message || 'Loading...'}</h1>
        </div>
    );
}

export default App;
