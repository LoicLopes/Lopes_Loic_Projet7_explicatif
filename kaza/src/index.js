import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/Main.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1 style={{ 
      fontSize : 20,
      width : 500,
      height : 80,
      textAlign : 'center',
      backgroundColor : "red" ,
      border : "3px  solid blue"
    }}>
    test da page index
    </h1>
    <App />
  </React.StrictMode>
);
