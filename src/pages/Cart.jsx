import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import PropTypes from 'prop-types';
import CartItem from '../Components/CartItem';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.removeItemFromStorage = this.removeItemFromStorage.bind(this);
  }

  componentDidMount() {
    const { getItemsFromStorage } = this.props;
    getItemsFromStorage();
  }

  removeItemFromStorage() {
    localStorage.removeItem('ItemCart');
    const { getItemsFromStorage } = this.props;
    getItemsFromStorage();
  }

  render() {
    const { cartItems, storeItems, getItemsFromStorage } = this.props;

    if (cartItems.length) {
      return (
        <div>
          <header>
            <Link to="/"><AiOutlineHome /></Link>
            <button
              type="button"
              onClick={ this.removeItemFromStorage }
            >
              Limpar Items

            </button>
          </header>
          <div>
            {cartItems.map((item) => (<CartItem
              key={ item.id }
              title={ item.title }
              image={ item.thumbnail }
              price={ item.price * item.quantity }
              quantity={ item.quantity }
              storeItems={ storeItems }
              product={ item }
              getItemsFromStorage={ getItemsFromStorage }
            />))}
          </div>
          <Link data-testid="checkout-products" to="/checkout">Finalizar compra</Link>
        </div>
      );
    }
    return (
      <div>
        <Link to="/"><AiOutlineHome /></Link>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </div>
    );
  }
}

Cart.defaultProps = {
  cartItems: [],
};

Cart.propTypes = {
  getItemsFromStorage: PropTypes.func.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object),
  storeItems: PropTypes.func.isRequired,
};

export default Cart;
