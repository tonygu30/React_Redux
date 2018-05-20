import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducers';
import axios from 'axios';

const logger = createLogger({
});

const middleware = applyMiddleware(logger);

const store = createStore(
  reducer,
  middleware,
);




render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

