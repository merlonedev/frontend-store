import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends React.Component {
  render() {
    const { itemCart } = this.props;
    return (
      <div>
        {itemCart.length ? (itemCart.map(({ title, id, quantity, thumbnail }) => (
          <div key={ id }>
            <h3 data-testid="shopping-cart-product-name">{title}</h3>
            <img src={ thumbnail } alt="Imagem do produto" />
            <p data-testid="shopping-cart-product-quantity">{quantity}</p>
          </div>
        ))) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
      </div>
    );
  }
}
// Neste componente está sendo retornado um H1 com o texto informado.

ShoppingCart.propTypes = {
  itemCart: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })),
}.isRequired;
