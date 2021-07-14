import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allCart: [],
      newProduct: undefined,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.renderForm = this.renderForm.bind(this);
    // this.renderList = this.renderList.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    // this.handleCategoryText = this.handleCategoryText.bind(this);
  }

  addItemToCart(product) {
    this.setState(({
      newProduct: product,
    }), () => this.saveCart());
  }

  saveCart() {
    this.setState(({ allCart, newProduct }) => ({
      allCart: [...allCart, newProduct],
    }));
  }

  changeCartItemQuantity() {
    // Funcao para alterar quantidade de itens no carrinho - Guilherme
  }

  removeItem() {
    // Remove item do carrinho :)
  }

  render() {
    const { allCart } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Search allCart={ this.addItemToCart } /> }
          />
          <Route
            exact
            path="/product-details/:categoryID/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route
            exact
            path="/cart"
            render={ (props) => <ShoppingCart allCart={ allCart } { ...props } /> }
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
