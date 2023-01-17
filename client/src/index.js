import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { UserAuthProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserAuthProvider>
      <Router>
        <App />
      </Router>
    </UserAuthProvider>
  </React.StrictMode>
);

