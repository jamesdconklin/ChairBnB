import React from 'react';
import ReactDom from 'react-dom';
import * as api from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded",
  () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store;
    window.api = api;
    ReactDom.render(<Root store={store}/>, root);
  }
);
