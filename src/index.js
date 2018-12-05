import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
