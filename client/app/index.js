import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Switch

} from 'react-router-dom'


import App from './components/App/App';
import NotFound from './components/App/NotFound';
import Home from './components/pages/Home';
import Login from "./components/pages/Login";
import Admin from "./components/pages/Admin";
import FishGallery from "./components/pages/FishGallery";
import Newsletter from "./components/pages/Newsletter";
import Inventory from "./components/pages/Inventory";
import Counters from "./components/pages/Counters";
import Checkout from "./components/pages/Checkout";
import ProductList from "./components/ProductList/ProductList";
import Contact from "./components/pages/Contact";

render((
  <Router>
    <div>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route exact path="/counters" component={Counters} />
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/newsletter" component={Newsletter} />
          <Route path="/fishgallery" component={FishGallery} />
          <Route exact path="/contact" component={Contact} />
          <Route path="/admin" component={Admin} />
          <Route path="/products" component={ProductList} />
          <Route path="/login" component={Login} />
          <Route path="/checkout" component={Checkout} />
          <Route component={NotFound} />
        </Switch>
      </App>
    </div>
  </Router>
), document.getElementById('app'));
