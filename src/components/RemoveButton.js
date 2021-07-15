import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RemoveButton extends Component {
  render() {
    const { removeItem, subtractPriceOfRemovedItem, id, price, quantity } = this.props;
    return (
      <button
        type="button"
        onClick={ () => {
          removeItem(id);
          subtractPriceOfRemovedItem(price, quantity);
        } }
      >
        X
      </button>
    );
  }
}

RemoveButton.propTypes = {
  removeItem: PropTypes.func.isRequired,
  subtractPriceOfRemovedItem: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default RemoveButton;
