import React from 'react';
import ReactDom from 'react-dom';
import * as api from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded",
  () => {
    let preloadedState = {
      session: {
        currentUser: window.currentUser || null,
        errors: []
      }
    };
    let store = configureStore(preloadedState);
    const root = document.getElementById("root");
    window.store = store;
    window.api = api;
    ReactDom.render(<Root store={store}/>, root);
  }
);
