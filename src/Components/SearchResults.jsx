import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Products from './Products';

class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      productList: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  componentDidUpdate(prevProps) {
    const { category, search } = this.props;
    const { category: prevCategory, search: prevSearch } = prevProps;
    if (prevSearch !== search || prevCategory !== category) {
      this.getProducts();
    }
  }

  async getProducts() {
    const { search, category } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const response = await api.getProductsFromCategoryAndQuery(category, search);
      this.setState({
        productList: response.results,
        loading: false,
      });
    });
  }

  render() {
    const { productList, loading } = this.state;
    if (loading) return <p>Carregando...</p>;
    if (productList.length === 0) {
      return (
        <p>Nenhum produto foi encontrado</p>
      );
    }
    return (
      <div>
        <Products productList={ productList } />
      </div>
    );
  }
}

SearchResults.propTypes = {
  category: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
};

export default SearchResults;
