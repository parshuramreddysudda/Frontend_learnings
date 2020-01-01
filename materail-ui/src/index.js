import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import App from './App';
import * as serviceWorker from './serviceWorker';
import Elements from '../src/components/elements';
import Special from '../src/components/Special'
import TextFeild from '../src/components/TextFeilds';

var hist=createBrowserHistory();
ReactDOM.render(  <Router history={hist}>
    <Switch>
      <Route path="/Text" component={TextFeild} />
      <Route path="/Elements" component={Elements} />
      <Route path="/Special" component={Special} />
      <Route path="/" component={App} />
    </Switch>
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();