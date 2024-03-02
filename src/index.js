// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//   <App/>
//   </>
// );

import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <BrowserRouter>
   
    <App />
    
  </BrowserRouter>,
  document.getElementById('root'),
);


