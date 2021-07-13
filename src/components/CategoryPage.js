import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductsCard';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Imagens/loading.gif';

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: true,
    };
    this.changeSate = this.changeSate.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
  }

  componentDidMount() {
    this.changeSate();
  }

  changeSate() {
    const { match: { params: { categoria: id } } } = this.props;
    getProductsFromCategoryAndQuery(id)
      .then(({ results }) => (
        this.setState({
          results,
          loading: false,
        })
      ));
  }

  renderLoading() {
    return <img src={ Loading } alt="Loading" />;
  }

  render() {
    const { results, loading } = this.state;
    return loading ? this.renderLoading() : <ProductCard product={ results } />;
  }
}

CategoryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoria: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CategoryPage;
