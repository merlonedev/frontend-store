import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItems from '../components/CartItems';

class CartPage extends Component {
  render() {
    const { cartProducts, totalPrice, handleShoppingCart } = this.props;
    return (
      <div>
        <Link to="/">
          Home
        </Link>
        <h1>SHOPPING CART</h1>
        {
          (cartProducts.length === 0)
            ? <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
            : (
              <CartItems
                cartProducts={ cartProducts }
                handleShoppingCart={ handleShoppingCart }
              />
            )
        }
        <p>{`Valor Total da Compra: R$${totalPrice.toFixed(2)}`}</p>
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          Finalizar Compra
        </Link>
      </div>
    );
  }
}

CartPage.propTypes = PropTypes.shape({
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  totalPrice: PropTypes.number.isRequired,
  handleShoppingCart: PropTypes.func.isRequired,
}).isRequired;

export default CartPage;
