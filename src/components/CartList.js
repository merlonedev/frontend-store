import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class CartList extends React.Component {
  render() {
    const { cart, deleteItem } = this.props;
    return (
      <section id="shopping-cart">
        {
          cart
            .map((item) => (
              <CartItem
                key={ item.id }
                item={ item }
                deleteItem={ deleteItem }
              />
            ))
        }
      </section>
    );
  }
}

CartList.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  deleteItem: PropTypes.func.isRequired,
};

export default CartList;
