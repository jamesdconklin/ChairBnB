import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div className="App">
    <h1>ChairBnB</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;
