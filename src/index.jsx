import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrate(<React.StrictMode><App /></React.StrictMode>, rootElement);
} else {
  ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, rootElement);
}


