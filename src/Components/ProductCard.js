import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { product } = this.props;
    localStorage.setItem(
      product.id,
      JSON.stringify(product),
    );
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <section data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Adcionar ao Carrinho
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
  }).isRequired,
};
