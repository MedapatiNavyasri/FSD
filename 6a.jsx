import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
function Student(props) {
    return (
        <div>
            <h2>Student Details</h2>
            <p>Name: {props.name}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}
function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrease
            </button>
        </div>
    );
}
function App() {
    return (
        <div>
            <Student name="Navya" course="Computer Science" />
            <Counter />
        </div>
    );
}
const root = createRoot(document.getElementById('root'));
root.render(<App />);