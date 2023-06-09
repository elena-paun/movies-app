import React from 'react';
import ReactDOM from 'react-dom/client';
import ConnectedApp from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import './input.css';
import store from './store.js';
import './i18n/config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>
);
