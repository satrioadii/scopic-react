import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './redux/reducers'
import sagas from './redux/sagas'

import reportWebVitals from './reportWebVitals';
import RouteComponent from './router';

/**
 * Middleware
 */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducers(),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(sagas);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouteComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
