import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonCart from '../Components/ButtonCart';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    return (
      <div>
        <header>
          <ButtonCart />
        </header>
        <main>
          <h1 data-testid="product-detail-name">{ product.title }</h1>
          <p>{ `Preço: R$${product.price}` }</p>
          <img src={ product.thumbnail } alt="product" />
        </main>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }),
}.isRequired;

export default ProductDetails;
