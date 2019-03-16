import React, { Component } from 'react';
import './App.css';
import Header from "./component/headers";
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Cart from "./component/Cart.jsx";
import ListItem from './component/ListItem';
import ProductDetail from "./component/Page/ProductDetail";
export default class App extends Component {

  render() {

    return (
      <BrowserRouter>
          <div>
              <Header numCart={this.props.numCart}/>
              <Switch>
                  <Route path="/" exact component={ListItem} />
                  <Route path="/product/:id" exact component={ProductDetail} />
                  <Route path="/cart" exact component={Cart} />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

