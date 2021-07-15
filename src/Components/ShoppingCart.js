import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ShoppingCart extends React.Component {
  render() {
    const { cart } = this.props;
    if (cart.length === 0) {
      return <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>;
    }
    return (
      <div>
        {cart.map(({ title, thumbnail, price }) => (
          <div key={ `${title}` } className="cart-card">
            <div className="card">
              <p
                className="card-title"
                data-testid="shopping-cart-product-name"
              >
                { title }
              </p>
              <img className="card-image" src={ thumbnail } alt={ title } />
              <p>{`R$: ${price}`}</p>
            </div>
            <p data-testid="shopping-cart-product-quantity">{cart.length}</p>
          </div>
        ))}
        <button type="button" data-testid="checkout-products"><Link to="/checkout">Botao</Link></button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(Array).isRequired,
};
