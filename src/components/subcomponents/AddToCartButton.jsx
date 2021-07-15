import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCartButton extends Component {
  render() {
    const { onClick, datatestid } = this.props;
    return (
      <button
        type="button"
        data-testid={ datatestid }
        onClick={ onClick }
        className="add-button button"
      >
        <i className="fas fa-cart-arrow-down"> Adicionar ao carrinho</i>
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  datatestid: PropTypes.string.isRequired,
};
