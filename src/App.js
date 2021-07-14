import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import CartBasket from './pages/CartBasket';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartList: [],
      quantity: [],
    };

    this.addToCart = this.addToCart.bind(this);
    this.loadCartQuantity = this.loadCartQuantity.bind(this);
  }

  componentDidMount() {
    this.loadCartQuantity();
  }

  addToCart(item) {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, item],
      quantity: [...prevState.quantity, item],
    }), () => {
      const { quantity } = this.state;
      localStorage.setItem('quantity', JSON.stringify(quantity));
    });
  }

  loadCartQuantity() {
    if (!localStorage.quantity) {
      return;
    }
    const quantity = JSON.parse(localStorage.getItem('quantity'));
    this.setState({ quantity });
  }

  render() {
    const { cartList, quantity } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/cart-basket"
            render={ (props) => <CartBasket { ...props } cartList={ cartList } /> }
          />
          <Route
            exact
            path="/"
            render={ (props) => (<Home
              { ...props }
              addToCart={ this.addToCart }
              quantity={ quantity }
            />) }
          />
          <Route
            exact
            path="/product-details/:categoryId/:id"
            render={
              (props) => (<ProductDetails
                { ...props }
                addToCart={ this.addToCart }
                quantity={ quantity }
              />)
            }
          />
          <Route
            exact
            path="/checkout"
            render={ (props) => (
              <Checkout
                { ...props }
                cartList={ cartList }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
