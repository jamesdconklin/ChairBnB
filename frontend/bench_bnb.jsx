import React from 'react';
import ReactDom from 'react-dom';
import * as session_api from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';
import * as bench_api from './util/bench_api_util';
import * as bench_actions from './actions/bench_actions';

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
    window.session_api = session_api;
    window.bench_api = bench_api;
    window.bench_actions = bench_actions;
    ReactDom.render(<Root store={store}/>, root);
  }
);
