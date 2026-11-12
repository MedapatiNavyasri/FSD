import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <h1>Conditional Rendering</h1>
            {isLoggedIn ? (
                <h2>Welcome User!</h2>
            ) : (
                <h2>Please Login</h2>
            )}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);