import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import TODO from './components/TODO';



ReactDOM.render(
  <React.StrictMode>
    <App /> <TODO /> 
  </React.StrictMode>,
  document.getElementById('root')
);
