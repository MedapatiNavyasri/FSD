import { createRoot } from 'react-dom/client';
const container = (
  <div>
    <h1>Hello from React!</h1>
    <p>This paragraph was rendered using JSX.</p>
    <ul>
      <li>ExpressJS</li>
      <li>ReactJS</li>
      <li>MongoDB</li>
    </ul>
  </div>
);
const root = createRoot(document.getElementById('root'));
root.render(container);