import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
      total: 0,
    };

    this.quantitySum = this.quantitySum.bind(this);
    this.quantitySub = this.quantitySub.bind(this);
  }

  quantitySum(event) {
    const { name } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] ? prevState[name] + 1 : 1,
    }));
  }

  quantitySub(event) {
    const { name } = event.target;
    this.setState((prevState) => ({
      [name]: prevState[name] ? prevState[name] - 1 : 0,
    }));
  }

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
            <button
              type="button"
              onClick={ this.quantitySum }
              name={ item.id }
            >
              +
            </button>
            <button
              type="button"
              onClick={ this.quantitySub }
              name={ item.id }
            >
              -
            </button>
            <p>
              QUANTIDADE
            </p>
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
