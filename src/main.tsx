import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { App } from './components/App.tsx';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers/index.ts';

export const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
