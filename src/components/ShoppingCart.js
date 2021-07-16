import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    const { cartAdd, removeItem, quantitySub, quantitySum } = this.props;
    const totalPrice = (cartAdd.reduce((acc, item) => {
      const { estado: { [item.id]: quant } } = this.props;
      const quantidade = quant || 1;
      return (quantidade * item.price + acc);
    }, 0));
    const carrinhoVazio = (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
    const carrinhoCheio = (
      <div>
        {cartAdd.map((item) => {
          const { estado: { [item.id]: quantidade = 1 } } = this.props;
          return (
            <div key={ item.id }>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <p>
                Preço:R$
                {item.price}
              </p>
              <img src={ item.thumbnail } alt={ item.title } />
              <button
                type="button"
                onClick={ () => quantitySub(item.id, quantidade) }
                name={ item.id }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <button
                type="button"
                onClick={ () => quantitySum(item.id) }
                name={ item.id }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                onClick={ () => removeItem(item.id) }
                name={ item.id }
              >
                x
              </button>
              <p>
                Quantidade:
              </p>
              <p
                data-testid="shopping-cart-product-quantity"
              >
                { quantidade }
              </p>
            </div>
          );
        })}
        <p>
          Valor Total da Compra: R$
          {totalPrice.toFixed(2)}
        </p>
        <Link
          to={ { pathname: '/finalizarcompra', state: totalPrice } }
          data-testid="checkout-products"
        >
          Finalizar Compra
        </Link>
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
