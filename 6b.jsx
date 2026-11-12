import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './style.scss';
function App() {
    const students = [
        { id: 1, name: 'Navya', course: 'ReactJS' },
        { id: 2, name: 'Rahul', course: 'NodeJS' },
        { id: 3, name: 'Priya', course: 'MongoDB' }
    ];
    return (
        <div className="container">
            <h1>Student Details</h1>
            {students.map((student) => (
                <div className="card" key={student.id}>
                    <h2>{student.name}</h2>
                    <p>Course: {student.course}</p>
                </div>
            ))}
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);