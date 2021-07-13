import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Search';
import ProductDetail from './ProductDetail';
import ShoppingCart from './ShoppingCart';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     cartList: [],
  //   };
  //   // this.handleSubmit = this.handleSubmit.bind(this);
  //   // this.renderForm = this.renderForm.bind(this);
  //   // this.renderList = this.renderList.bind(this);
  //   // this.handleCategoryText = this.handleCategoryText.bind(this);
  // }

  addItemToCart() {
    // Funcao para adiciona itens para o carrinho - Luiz
  }

  changeCartItemQuantity() {
    // Funcao para alterar quantidade de itens no carrinho - Guilherme
  }

  removeItem() {
    // Remove item do carrinho :)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Search funcao={ this.addItemToCart } /> }
          />
          <Route
            exact
            path="/product-details/:categoryID/:id"
            render={ (props) => <ProductDetail { ...props } /> }
          />
          <Route
            exact
            path="/cart"
            render={ (props) => <ShoppingCart { ...props } /> }
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
