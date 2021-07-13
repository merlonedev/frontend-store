import React from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/api';

class SearchResult extends React.Component {
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

  componentDidUpdate() {
    this.getProducts();
  }

  async getProducts() {
    const { getProductsFromCategoryAndQuery } = api;
    const { textToSearch } = this.props;
    try {
      const allProducts = await getProductsFromCategoryAndQuery('MLB5672', textToSearch);
      this.setState({
        products: allProducts.results,
      });
    } catch {
      return <p>Nenhum produto foi encontrado</p>;
    }
  }

  render() {
    const { products } = this.state;

    if (products.length === 0) {
      return <p>Nenhum produto foi encontrado</p>;
    }
    return (
      <div>
        {
          products.map((current) => (
            <div key={ current.id }>
              <img src={ current.thumbnail } alt="Product" />
              <p>
                { current.title }
                Preço:
                { current.price }
              </p>
            </div>
          ))
        }
      </div>
    );
  }
}

SearchResult.propTypes = {
  textToSearch: PropTypes.string.isRequired,
};

export default SearchResult;
