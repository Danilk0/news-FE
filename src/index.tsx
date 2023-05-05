import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { spy } from 'mobx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
spy((ev) => {
    if (ev.type.includes('action')) {
        console.log(ev)
    }
})
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
