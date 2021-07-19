import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class CartList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (<CartItem
          key={ product.title }
          product={ product }
        />))}
        <p
          data-testid="shopping-cart-product-quantity"
        >
          { `Quantidade: ${products.length}` }
        </p>
      </div>
    );
  }
}

CartList.propTypes = {
  products: PropTypes.instanceOf(Array).isRequired,
};
export default CartList;
