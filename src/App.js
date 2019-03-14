import React, { Component } from 'react';
import './App.css';
import Header from "./component/headers";
import Product from "./component/product";
import Cart from "./component/cart"
import { BrowserRouter,Route,Switch } from "react-router-dom";
class App extends Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.displayCart = this.displayCart.bind(this);
    this.hello = "hello";
    this.state = { 
      arrayData:'',
      numCart:0,
      arrayCart:[]
    }
  }
  componentDidMount() {
    const query = `query products {
      products {
        id
        name
        description
        rating
        price
        images {
          url
          alt
        }
      }
    }`;
    
    fetch('https://nordic-shop-api.herokuapp.com/', {
      credentials: 'omit',
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        variables: {},
        query: query,
      }),
      method: 'POST',
      mode: 'cors',
    })
    .then((res) => res.json())
    .then((arrData) =>
        this.setState({
          arrayData: arrData.data.products
        }),
    )
  }
  addToCart(id) {
    
    this.setState({
      numCart: this.state.numCart + 1,
      arrayCart:this.state.arrayCart.concat(id)
    })
    console.log(this.state.arrayCart)
  }
  displayCart() {
     
  }
  componentDidUpdate(prevProps,prevState) {
    if(this.prevState != this.state.arrayCart) {
      // console.log(this.state.arrayCart);
    }
  }
  render() {
    const arData = this.state.arrayData;
    // const arrayCart = this.state.arrayCart;
    let datas = Object.keys(arData).map(function(key, index) {
      return (
        <Product 
           key={arData[index].id}
           productID={arData[index].id}
           productName={arData[index].name}
           productImage={arData[index].images[0].url}
           productPrice={arData[index].price}
           btnAddToCart={this.addToCart}
        />
      )
    }.bind(this))
    return (
      <div className="App">
      <BrowserRouter>
      <>
        <Header numCart={this.state.numCart} arrayCarts={this.state.arrayCart}/>
        <Switch>
            <Route path="/">
                <div className="listProduct">
                    {datas}
                </div>
            </Route>
            <Route path="/cart" exact component={Cart}>
              <Cart />
            </Route>
        </Switch>
        </>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
