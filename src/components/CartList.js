import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartList extends Component {
  render() {
    const { item: {
      id,
      quantity,
    } } = this.props;
    const { removeItem, increaseItem, decreaseItem } = this.props;
    console.log(removeItem);
    return (
      <div>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => increaseItem(id) }
        >
          +
        </button>
        <p>{ quantity }</p>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => decreaseItem(id) }

        >
          -
        </button>
        <button
          type="button"
          onClick={ () => removeItem(id) }

        >
          X
        </button>
      </div>
    );
  }
}

CartList.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  increaseItem: PropTypes.func.isRequired,
  decreaseItem: PropTypes.func.isRequired,
};
