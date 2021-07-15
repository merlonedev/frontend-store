import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      total: 0,
    };

    this.quantityChange = this.quantityChange.bind(this);
  }

  quantityChange(event) {
    const { name } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] ? prevState[name] + 1 : 1,
    }));
  }

  render() {
    const { cartAdd } = this.props;
    const carrinhoVazio = (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
    const { item: { id } } = this.state;
    const carrinhoCheio = (
      <div>
        {cartAdd.map((item) => (
          <div key={ item.id }>
            <p data-testid="shopping-cart-product-name">{item.title}</p>
            <p>{item.price}</p>
            <img src={ item.thumbnail } alt={ item.title } />
            <button
              type="button"
              onClick={ this.quantityChange }
              name={ item.id }
            >
              +
            </button>
            <button type="button">
              -
            </button>
            <p>
              Quantidade:
            </p>
          </div>
        ))}
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`Total de itens: ${id}`}
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
