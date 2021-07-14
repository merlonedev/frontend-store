import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
      newProduct: undefined,
    };
    this.removeItem = this.removeItem.bind(this);
    this.cartItemAddQuantity = this.cartItemAddQuantity.bind(this);
    this.cartItemDiminishQuantity = this.cartItemDiminishQuantity.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
    this.loadLocalStorage = this.loadLocalStorage.bind(this);
  }

  componentDidMount() {
    const localCartList = localStorage.getItem('cartList');
    if (localCartList !== null) {
      loadLocalStorage();
    }
  }

  loadLocalStorage() {
    const localCartList = localStorage.getItem('cartList');
    this.setState({
      cartList: localCartList,
    });
  }

  saveLocalStorage() {
    const { cartList } = this.state;
    localStorage.setItem('cartlist', JSON.stringify(cartList));
  }

  addItemToCart(product) {
    product.quantity = 1;
    this.setState(({
      newProduct: product,
    }), () => this.saveCart());
  }

  saveCart() {
    this.setState(({ cartList, newProduct }) => ({
      cartList: [...cartList, newProduct],
    }));
    this.saveLocalStorage();
  }

  cartItemAddQuantity(id) {
    const { cartList } = this.state;
    const selIndex = cartList.findIndex((item) => item.id === id);
    const selItem = cartList.find((item) => item.id === id);
    cartList[selIndex].quantity = selItem.quantity + 1;
    this.setState({ cartList });
    this.saveLocalStorage();
  }

  cartItemDiminishQuantity(id) {
    const { cartList } = this.state;
    const selItem = cartList.find((item) => item.id === id);
    if (selItem.quantity <= 1) return null;
    const selIndex = cartList.findIndex((item) => item.id === id);
    cartList[selIndex].quantity = selItem.quantity - 1;
    this.setState({ cartList });
    this.saveLocalStorage();
  }

  removeItem(id) {
    const { cartList } = this.state;
    const selIndex = cartList.findIndex((item) => item.id === id);
    cartList.splice(selIndex, 1);
    this.setState({ cartList });
    this.saveLocalStorage();
  }

  render() {
    const { cartList } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Search
              addItemToCart={ this.addItemToCart }
              cartList={ cartList }
            />) }
          />
          <Route
            exact
            path="/product-details/:categoryID/:id"
            render={ (props) => (<ProductDetail
              { ...props }
              addItemToCart={ this.addItemToCart }
              cartList={ cartList }
            />) }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<ShoppingCart
              cartItemAddQuantity={ this.cartItemAddQuantity }
              cartItemDiminishQuantity={ this.cartItemDiminishQuantity }
              removeItem={ this.removeItem }
              cartList={ cartList }
            />) }
          />
          {/* <Route
            path="/checkout"
            render={ (props) => <Checkout { ...props } /> }
          /> */}
        </Switch>
      </Router>
    );
  }
}
export default Home;
