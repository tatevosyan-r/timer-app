import React from 'react';
import Timer from './components/Timer';

function App() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', background: '#ecf0f1' }}>
            <Timer />
        </div>
    );
}

export default App;