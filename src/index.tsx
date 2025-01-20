import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
  document.getElementById('root') // Убедитесь, что у вас есть <div id="root"></div> в вашем HTML
);
