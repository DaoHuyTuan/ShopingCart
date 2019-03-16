import React, { Component } from 'react';
import './App.css';
import Header from "./component/headers";
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Cart from "./component/cart";
import ListItem from './component/ListItem';
import ProductDetail from "./component/Page/ProductDetail";
import SearchPage from './component/Page/SearchPage';
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
                  <Route path="/search/:name" exact component={SearchPage} />
              </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

