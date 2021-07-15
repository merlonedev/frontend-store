import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { data } = this.props;
    const { title, thumbnail, price, id } = data;
    return (
      <Link
        data-testid="product-detail-link"
        to={ `/product/${id}` }
      >
        <div data-testid="product">
          <h6>{ title }</h6>
          <img src={ thumbnail } alt={ title } />
          <h6>{ price }</h6>
        </div>
      </Link>
    );
  }
}

CartItem.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CartItem;
