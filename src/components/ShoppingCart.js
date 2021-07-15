import React from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.decreaseQtt = this.decreaseQtt.bind(this);
    this.increaseQtt = this.increaseQtt.bind(this);
  }

  // Função para decrementar a quntidade
  decreaseQtt() {
    this.setState((previousState) => ({
      quantity: previousState.quantity - 1,
    }));
  }

  // Função para incrementar a quantidade
  increaseQtt() {
    this.setState((previousState) => ({
      quantity: previousState.quantity + 1,
    }));
  }

  render() {
    const { itemCart } = this.props;
    return (
      <div>
        {itemCart.length ? (itemCart.map(({ title, id, quantity, thumbnail }) => (
          <div key={ id }>
            <h3 data-testid="shopping-cart-product-name">{title}</h3>
            <img src={ thumbnail } alt="Imagem do produto" />
            {/* Adicionando o botão de decrementação */}
            <button
              type="button"
              onClick={ this.decreaseQtt }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">{quantity}</p>
            {/* Adicionando o botão de incrementação */}
            <button
              type="button"
              onClick={ this.increaseQtt }
              data-testid="product-increase-quantity"
            >
              +
            </button>
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
