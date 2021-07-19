/* eslint-disable camelcase */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends Component {
  render() {
    const { product, addToCartCallback, dataTestId } = this.props;
    return (
      <button
        type="button"
        data-testid={ dataTestId }
        onClick={ () => addToCartCallback(product) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    category_id: PropTypes.string,
  }).isRequired,
  addToCartCallback: PropTypes.func.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default AddToCartButton;
