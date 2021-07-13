import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

class ShoppingCart extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <section>
        {cartItems.length == 0 ? (
          <span data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio.
          </span>
        ) : (
          <CartItems cartItems={cartItems} />
        )}
        <p>
          <Link to="/">VOLTAR</Link>
        </p>
      </section>
    );
  }
}
export default ShoppingCart;
