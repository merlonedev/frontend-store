import React from 'react';
import * as api from '../services/api';

class Filter extends React.Component {
  constructor() {
    super();

    this.getProducts = this.getProducts.bind(this);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const allProducts = await api.getProductsFromQuery('agro');
    this.setState({
      products: allProducts.results,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        {products.map((current) => (
          <p key={ current.id }>
            { current.title }
          </p>
        ))}
      </div>
    );
  }
}

export default Filter;
