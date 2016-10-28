import React from 'react';
import ReactDom from 'react-dom';
import * as api from './util/session_api_util';

document.addEventListener("DOMContentLoaded",
  () => {
    const root = document.getElementById("root");
    window.api = api;
    ReactDom.render(
      <h1>Finally moving out of your parents' house?</h1>,
      root
    );
  }
);
