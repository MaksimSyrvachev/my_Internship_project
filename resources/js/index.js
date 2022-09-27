import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Render App component which will be the parent to all components
if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}