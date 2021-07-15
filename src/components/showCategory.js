import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import { getCategories } from '../services/api';

class ShowCategory extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: true,
    };
    this.changeState = this.changeState.bind(this);
    this.loadingShow = this.loadingShow.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  async changeState() {
    const results = await getCategories();
    this.setState({
      results,
      loading: false,
    });
  }

  loadingShow() {
    return <img src="./loading.gif" alt="Loading" />;
  }

  render() {
    const { results, loading } = this.state;
    return loading ? this.loadingShow() : <ProductCard product={ results } />;
  }
}

ShowCategory.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoria: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ShowCategory;
