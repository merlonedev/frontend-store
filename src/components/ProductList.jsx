import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { list, onProductClick } = this.props;
    return (
      <section className="product-list">
        { list.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
          onProductClick={ onProductClick }
        />))}
      </section>
    );
  }
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  onProductClick: PropTypes.func.isRequired,
};
