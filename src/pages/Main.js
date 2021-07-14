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
      render: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      category: value,
    }, () => {
      const { category } = this.state;

      if (category) {
        api.getProductsFromCategoryAndQuery(category, false)
          .then((res) => {
            const products = res.results;
            this.setState({
              prodList: [...products],
            }, () => this.setState({
              render: true,
            }));
          });
      }
    });
  }

  renderProducts() {
    const { category, prodList } = this.state;
    console.log('render', prodList);
    return (
      <ProductList category={ category } prodList={ prodList } />
    );
  }

  render() {
    const { render } = this.state;
    // console.log('main', prodList)

    return (
      <main>
        { render && this.renderProducts() }
        <Categories onClick={ this.handleChange } />
      </main>
    );
  }
}

export default Main;
