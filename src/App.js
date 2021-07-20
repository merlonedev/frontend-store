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
    this.removeItem = this.removeItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.loadCartQuantity = this.loadCartQuantity.bind(this);
    this.loadCartProducts = this.loadCartProducts.bind(this);
    this.localstorageProducts = this.localstorageProducts.bind(this);
  }

  componentDidMount() {
    this.loadCartQuantity();
    this.loadCartProducts();
  }

  addToCart(item) {
    this.setState((prevState) => ({
      cartList: [...prevState.cartList, item],
      quantity: [...prevState.quantity, item],
    }), () => {
      const { quantity, cartList } = this.state;
      localStorage.setItem('quantity', JSON.stringify(quantity));
      localStorage.setItem('cartProducts', JSON.stringify(cartList));
    });
  }

  loadCartQuantity() {
    if (!localStorage.quantity) {
      return;
    }
    const quantity = JSON.parse(localStorage.getItem('quantity'));
    this.setState({ quantity });
  }

  loadCartProducts() {
    if (!localStorage.cartProducts) {
      return;
    }

    const cartList = JSON.parse(localStorage.getItem('cartProducts'));
    this.setState({ cartList });
  }

  localstorageProducts(item) {
    const { id } = item;
    const { cartList, quantity } = this.state;
    const productQuantity = (productId) => (
      Object.keys(cartList)
        .filter((item1) => cartList[item1].id === productId)
    );
    const quantityObj = Object.keys(cartList).map((p) => (
      productQuantity(cartList[p].id)
    ));
    const cartProducts = cartList.findIndex((cart) => cart.id === id);
    const length = -1;
    if (cartProducts !== length) {
      cartList.splice(cartProducts, quantityObj[0].length);
      localStorage.setItem('cartProducts', JSON.stringify(cartList));
    }
    const cartQuantity = quantity.findIndex((quant) => quant.id === id);
    if (cartQuantity !== length) {
      quantity.splice(cartQuantity, quantityObj[0].length);
      localStorage.setItem('quantity', JSON.stringify(quantity));
    }
  }

  removeItem(item) {
    const { id } = item;
    this.setState((prev) => {
      const { cartList } = prev;
      const filtro = cartList.filter((cartItem) => cartItem.id !== id);
      return { cartList: filtro };
    });
    this.localstorageProducts(item);
  }

  render() {
    const { cartList, quantity } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/cart-basket"
            render={ (props) => (<CartBasket
              { ...props }
              cartList={ cartList }
              removeItem={ this.removeItem }
              quantity={ quantity }
            />) }
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
