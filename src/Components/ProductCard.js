import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';

export default class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    if (!product) {
      return <NotFound />;
    }
    return (
      <section data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
