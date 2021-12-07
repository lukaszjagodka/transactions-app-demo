import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import { reducer } from './reducers';
import App from './App';

const store = configureStore({
  reducer,
  middleware: [logger],
  // devTools: false
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
