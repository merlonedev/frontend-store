import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class Main extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     category: null,
  //   };
  // }
  render() {
    return (
      <main>
        <Link data-testid="shopping-cart-button" to="/shopping-cart">
          Retorna
        </Link>
        <ProductList />
        <Categories />
      </main>
    );
  }
}

export default Main;
