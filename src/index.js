import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from 'react-router-dom';

// ReactDOM.render(
//   <>
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>
//   </>,
//   document.getElementById('root')
// );


// import { createRoot } from 'react-dom/client';
// import App from './App';
// const container = document.getElementById('app');
// const root = createRoot(container); // createRoot(container!) if you use TypeScript
// root.render(<App tab="home" />);

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function tick() {
  const element = (
     <BrowserRouter>
  <App />
  </BrowserRouter>
  );
  root.render(element);
}

setInterval(tick, 1000);
