import React, { Component } from 'react';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import * as api from '../services/api';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      prodList: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    const { category } = this.state;

    this.setState({
      category: value,
    }, () => {
      if (category) {
        api.getProductsFromCategoryAndQuery(category, false)
          .then((res) => {
            const products = res.results;
            this.setState({
              prodList: [...products],
            });
          });
      }
    });
  }

  render() {
    const { category, prodList } = this.state;

    return (
      <main>
        <ProductList category={ category } prodList={ prodList } />
        <Categories onClick={ this.handleChange } />
      </main>
    );
  }
}

export default Main;
