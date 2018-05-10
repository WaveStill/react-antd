import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Redirect
} from 'react-router-dom';

import './index.css';
// import App from './App';
// import Helloxjt1 from './pages/Helloxjt/Helloxjt1';
import Helloxjt2 from './pages/Helloxjt/Helloxjt2';
// import Lazyload from './pages/LazyLoad/Lazyload';
import asyncComponent from './lazy/index';
import registerServiceWorker from './registerServiceWorker';

const App = asyncComponent(() => import(/* webpackChunkName: "App" */ "./App"));
const Helloxjt1 = asyncComponent(() => import(/* webpackChunkName: "Helloxjt1" */ "./pages/Helloxjt/Helloxjt1"));
//const Helloxjt2 = asyncComponent(() => import(/* webpackChunkName: "Helloxjt2" */ "./pages/Helloxjt/Helloxjt2"));
const Lazyload = asyncComponent(() => import(/* webpackChunkName: "Lazyload" */ "./pages/LazyLoad/Lazyload"));

ReactDOM.render(<Router>
  <div>
    <Route exact path={'/'} component={App}>
    </Route>
    <Route exact path={'/xjt1'} component={Helloxjt1} />
      <Route exact path={'/xjt2'} component={Helloxjt2} />
      <Route exact path={'/lazy'} component={Lazyload} />
  </div>
</Router>, document.getElementById('root'));
registerServiceWorker();
