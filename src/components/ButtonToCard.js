import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonToCard extends Component {
  render() {
    const { addToCart } = this.props;

    return (
      <div>
        <button
          type="button"
          id="add-to-cart"
          data-testid="product-add-to-cart"
          onClick={ addToCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ButtonToCard.propTypes = PropTypes.shape({
  addToCart: PropTypes.func.isRequired,
}).isRequired;

export default ButtonToCard;
