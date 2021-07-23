import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListItems from './pages/ListItems';
import CartItems from './pages/CartItems';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

class App extends React.Component {
  constructor(props) {
    super(props); // usado como referencia lógica do código do Grupo 10 (source: https://github.com/tryber/sd-12-project-frontend-online-store/blob/main-group-10/src/App.js)
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    this.state = {
      cartItems: storage || [],
      total: 0,
      cartQty: 0,
    };
    this.addToCartItems = this.addToCartItems.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.loadCartItemStorage = this.loadCartItemStorage.bind(this);
    this.saveCartItemStorage = this.saveCartItemStorage.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.getTotal = this.getTotal.bind(this);
  }

  componentDidMount() {
    this.loadCartItemStorage();
  }

  componentDidUpdate() {
    const { cartItems } = this.state;
    this.saveCartItemStorage(cartItems);
  }

  getTotal(total) {
    this.setState({
      total,
    });
  }

  loadCartItemStorage() {
    const storage = JSON.parse(localStorage.getItem('cartItems'));
    if (Array.isArray(storage)) {
      this.setState({
        cartItems: [...storage],
        cartQty: storage.reduce((acc, curr) => curr.count + acc, 0),
      });
    }
  }

  saveCartItemStorage(state) {
    localStorage.setItem('cartItems', JSON.stringify(state));
  }

  addToCartItems(newItem) {
    const { cartItems } = this.state;
    const notRepeated = {
      product: newItem,
      count: 1,
    };
    const yesRepeated = cartItems.map((item) => {
      if (item.product.id === newItem.id) {
        return {
          product: item.product,
          count: item.count + 1,
        };
      }
      return item;
    });
    const isRepeated = cartItems.some((item) => item.product.id === newItem.id);
    if (!isRepeated) {
      return this.setState((state) => ({
        cartItems: [...state.cartItems, notRepeated],
        cartQty: state.cartItems.reduce((acc, curr) => curr.count + acc, 0) + 1,
      }));
    }
    this.setState({
      cartItems: [...yesRepeated],
      cartQty: yesRepeated.reduce((acc, curr) => curr.count + acc, 0),
    });
  }

  updateItem(items) {
    this.setState({
      cartItems: [...items],
      cartQty: items.reduce((acc, curr) => curr.count + acc, 0),
    });
  }

  removeItem(updateCart) {
    this.setState({
      cartItems: [...updateCart],
      cartQty: updateCart.reduce((acc, curr) => curr.count + acc, 0),
    });
  }

  render() {
    const { cartItems, total, cartQty } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={ (props) => (
              <ListItems
                { ...props }
                addToCartItems={ this.addToCartItems }
                amountCart={ cartQty }
              />
            ) }
          />
          <Route
            path="/cart"
            exact
            render={ (props) => (
              <CartItems
                { ...props }
                setItemCart={ cartItems }
                removeItem={ this.removeItem }
                updateItem={ this.updateItem }
                sendTotal={ this.getTotal }
              />
            ) }
          />
          <Route
            path="/product/:categoryId/:productId"
            render={ (props) => (
              <ProductDetails
                { ...props }
                amountCart={ cartQty }
                addToCartItems={ this.addToCartItems }
              />
            ) }
          />
          <Route
            path="/checkout"
            render={ (props) => (
              <Checkout
                { ...props }
                cartItems={ { cartItems, total } }
                amountCart={ cartQty }
              />
            ) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
