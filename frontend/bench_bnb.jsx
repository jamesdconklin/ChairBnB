import React from 'react';
import ReactDom from 'react-dom';
import * as api from './util/session_api_util';
import configureStore from './store/store';
import SessionReducer from './reducers/session_reducer';

document.addEventListener("DOMContentLoaded",
  () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.sr = SessionReducer;
    window.store = store;
    window.api = api;
    ReactDom.render(
      <h1>Finally moving out of your parents' house?</h1>,
      root
    );
  }
);
