import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItems from './pages/ListItems';
import CartItems from './pages/CartItems';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends React.Component {
  constructor(props) {
    super(props); // usado como referencia lógica do código do Grupo 10 (source: https://github.com/tryber/sd-12-project-frontend-online-store/blob/main-group-10/src/App.js)
    this.state = {
      cartItems: [],
      checkoutItems: [],
    };
    this.addToCartItems = this.addToCartItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.checkoutInfos = this.checkoutInfos.bind(this);
    this.loadCartItemStorage = this.loadCartItemStorage.bind(this);
    this.saveCartItemStorage = this.saveCartItemStorage.bind(this);
  }

  componentDidMount() {
    this.loadCartItemStorage();
  }

  componentDidUpdate() {
    const { cartItems } = this.state;
    this.saveCartItemStorage(cartItems);
    return true;
  }

  saveCartItemStorage(state) {
    localStorage.setItem('cartItems', JSON.stringify(state));
  }

  loadCartItemStorage() {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    if (Array.isArray(storage) && storage.length) {
      this.setState({
        cartItems: [...storage],
      });
    }
  }

  checkoutInfos(cartInfo) {
    this.setState({
      checkoutItems: [...cartInfo],
    });
  }

  addToCartItems(newItem) {
    const { cartItems } = this.state;
    const notRepeated = {
      product: newItem,
      count: 1,
    };
    const yesRepeated = cartItems.map((item) => {
      if (item.product === newItem) {
        return {
          product: item.product,
          count: item.count + 1,
        };
      }
      return item;
    });
    const isRepeated = cartItems.some((item) => item.product === newItem);
    if (!isRepeated) {
      return this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, notRepeated],
      }));
    }

    this.setState({
      cartItems: [...yesRepeated],
    });
  }

  removeItem(updateCart) {
    this.setState({
      cartItems: [...updateCart],
    });
  }

  render() {
    const { cartItems, checkoutItems } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={
              (props) => (<ListItems
                { ...props }
                addToCartItems={ this.addToCartItems }
                cartQtd={ cartItems.length }
              />)
            }
          />
          <Route
            path="/cart"
            exact
            render={
              (props) => (<CartItems
                { ...props }
                setItemCart={ cartItems }
                removeItem={ this.removeItem }
                checkoutInfos={ this.checkoutInfos }
              />)
            }
          />
          <Route
            path="/item/:categoryId/:productId"
            render={ (props) => (<ProductDetails
              { ...props }
              cartQtd={ cartItems.length }
              addToCartItems={ this.addToCartItems }
            />) }
          />
          <Route
            path="/checkout"
            render={ (props) => (<Checkout { ...props } cartItems={ checkoutItems } />) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
