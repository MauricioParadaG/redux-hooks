import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

// Redux
import {Provider, } from 'react-redux';
import store from './store';


function App() {
  return (
      <BrowserRouter>
        <Provider store={store}>
        <Header />
        <div className="container mt-4">
          <Switch>
            <Route exact path="/" component={Products}/>
            <Route exact path="/products/new" component={NewProduct}/>
            <Route exact path="/products/edit:id" component={EditProduct}/>
          </Switch>
        </div>
        </Provider>
      </BrowserRouter>
  );
}

export default App;
