import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import SessionFormContainer from './session/session_form_container';
import BenchIndexContainer from './bench/bench_index_container';
import SearchContainer from './bench/search_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = () => {
    if (store.getState().session.currentUser) {
      hashHistory.replace("/");
    } else {
      console.log(store.getState());
    }
  };
  return (
   <Provider store={store}>
     <Router history={hashHistory}>
       <Route path="/" component={App} >
         <IndexRoute component={SearchContainer}/>
         <Route path="/login" component={SessionFormContainer}
                onEnter={_redirectIfLoggedIn}/>
         <Route path="/signup" component={SessionFormContainer}
                onEnter={_redirectIfLoggedIn}/>
       </Route>
     </Router>
   </Provider>
  );
};

export default Root;
