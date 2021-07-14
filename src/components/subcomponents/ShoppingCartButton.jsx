import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Quantities from './Quantities';

export default class ShoppingCartButton extends Component {
  render() {
    const { quantity } = this.props;
    return (
      <button type="button" className="button cart-button">
        <Link to="/cart" data-testid="shopping-cart-button">
          <p>
            <i className="fas fa-shopping-cart" />
            <Quantities quantity={ quantity } />
          </p>
        </Link>
      </button>
    );
  }
}

ShoppingCartButton.defaultProps = {
  quantity: undefined,
};

ShoppingCartButton.propTypes = {
  quantity: PropTypes.number,
};
