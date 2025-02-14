import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './state.json';

export const GlobalContext = createContext(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContext.Provider value={state}>
    <App />
  </GlobalContext.Provider>
);
