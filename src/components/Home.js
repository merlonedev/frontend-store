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
  }

  cartItemAddQuantity(id) {
    const { cartList } = this.state;
    const selIndex = cartList.findIndex((item) => item.id === id);
    const selItem = cartList.find((item) => item.id === id);
    cartList[selIndex].quantity = selItem.quantity + 1;
    this.setState({ cartList });
  }

  cartItemDiminishQuantity(id) {
    const { cartList } = this.state;
    const selItem = cartList.find((item) => item.id === id);
    if (selItem.quantity <= 1) return null;
    const selIndex = cartList.findIndex((item) => item.id === id);
    cartList[selIndex].quantity = selItem.quantity - 1;
    this.setState({ cartList });
  }

  removeItem(id) {
    const { cartList } = this.state;
    const selIndex = cartList.findIndex((item) => item.id === id);
    cartList.splice(selIndex, 1);
    this.setState({ cartList });
  }

  render() {
    const { cartList } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Search addItemToCart={ this.addItemToCart } /> }
          />
          <Route
            exact
            path="/product-details/:categoryID/:id"
            render={ (props) => <ProductDetail { ...props } addItemToCart={ this.addItemToCart } /> }
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
