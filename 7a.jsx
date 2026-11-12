import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
function App() {
    const [message, setMessage] = useState('Click the button');
    function handleClick() {
        setMessage('Button clicked successfully!');
    }
    function handleDoubleClick() {
        setMessage('Button double clicked!');
    }
    return (
        <div>
            <h1>React Event Handling</h1>
            <h2>{message}</h2>
            <button onClick={handleClick}>
                Click Me
            </button>
            <button onDoubleClick={handleDoubleClick}>
                Double Click Me
            </button>
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);