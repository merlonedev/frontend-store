import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

class ShoppingCart extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     total: 0,
  //   };
  //   this.updateTotal = this.updateTotal.bind(this);
  // }

  // componentDidMount() {
  //   this.updateTotal();
  // }

  // updateTotal() {
  //   console.log('chamou update');
  //   const { cartList } = this.props;
  //   const total = cartList.reduce((acc, item) => {
  //     acc += (item.price * item.quantity);
  //     return acc;
  //   });
  //   console.log(total);
  //   this.setState({ total });
  // }

  render() {
    const {
      removeItem,
      cartItemDiminishQuantity,
      cartItemAddQuantity,
      cartList } = this.props;
    // const { total } = this.state;
    if (cartList.length === 0) {
      return (
        <div data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </div>
      );
    }
    return (
      <section>
        <div>
          <ul>
            { cartList.map(
              (item) => (<CartItem
                key={ item.id }
                item={ item }
                removeItem={ removeItem }
                cartItemDiminishQuantity={ cartItemDiminishQuantity }
                cartItemAddQuantity={ cartItemAddQuantity }
              />),
            )}
          </ul>
          {/* <div>{ `Total: R$${total}` }</div> */}
          <Link
            to="/checkout"
          >
            <button
              type="button"
              data-testid="checkout-products"
            >
              Checkout
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  removeItem: PropTypes.func,
  cartItemDiminishQuantity: PropTypes.func,
  cartItemAddQuantity: PropTypes.func,
}.isRequired;

export default ShoppingCart;
