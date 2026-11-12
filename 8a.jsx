import React from 'react';
import { createRoot } from 'react-dom/client';
function App() {
    const subjects = [
        'Java',
        'Python',
        'ReactJS',
        'NodeJS',
        'MongoDB'
    ];
    return (
        <div>
            <h1>Student Subjects List</h1>
            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}>{subject}</li>
                ))}
            </ul>
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);