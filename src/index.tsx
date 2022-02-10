import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import { rootReducer } from './AppReducer';
import App from './App';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* logger */),
  devTools: false,
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
