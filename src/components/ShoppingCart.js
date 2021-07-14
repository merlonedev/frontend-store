import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { cartAdd } = this.props;
    const carrinhoVazio = (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
    const carrinhoCheio = (
      <div>
        {cartAdd.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <p>{item.price}</p>
            <img src={ item.thumbnail } alt={ item.title } />
          </div>
        ))}
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`Total de itens: ${cartAdd.length}`}
        </p>
      </div>
    );

    if (cartAdd.length === 0) {
      return carrinhoVazio;
    }
    return carrinhoCheio;
  }
}

ShoppingCart.propTypes = {
  cartAdd: PropTypes.func.isRequired,
}.isRequired;

export default ShoppingCart;
