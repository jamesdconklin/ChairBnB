import React from 'react';
import ReactDom from 'react-dom';

document.addEventListener("DOMContentLoaded",
  () => {
    const root = document.getElementById("root");
    ReactDom.render(
      <h1>Finally moving out of your parents' house?</h1>,
      root
    );
  }
);
