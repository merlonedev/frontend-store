import React, { Component } from 'react';
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
        <ProductList />
        <Categories />
      </main>
    );
  }
}

export default Main;
