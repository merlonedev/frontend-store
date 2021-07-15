import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { data } = this.props;
    const { title, thumbnail, price } = data;
    return (
      <div data-testid="product">
        <h6>{ title }</h6>
        <img src={ thumbnail } alt={ title } />
        <h6>{ price }</h6>
      </div>
    );
  }
}

CartItem.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CartItem;
