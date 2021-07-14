import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class CartList extends React.Component {
  render() {
    const { cart } = this.props;
    console.log(cart);
    return (
      <section id="shopping-cart">
        {
          cart
            .map((item) => (
              <CartItem
                key={ item.title }
                item={ item }
              />
            ))
        }
      </section>
    );
  }
}

CartList.propTypes = {
  cart: PropTypes.arrayOf(Object).isRequired,
};

export default CartList;
