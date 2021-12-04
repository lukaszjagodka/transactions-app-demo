import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { reducer } from './reducers';
import App from './App';

const store = configureStore({
  reducer,
  middleware: [logger],
  // devTools: false
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
