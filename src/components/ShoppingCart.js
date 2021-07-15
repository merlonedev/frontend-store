import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuantity: props.cartAdd.length,
      cartAdd: props.cartAdd,
    };

    this.quantitySum = this.quantitySum.bind(this);
    this.quantitySub = this.quantitySub.bind(this);
  }

  quantitySum(id) {
    this.setState((prevState) => ({
      [id]: prevState[id] ? prevState[id] + 1 : 2,
      totalQuantity: prevState.totalQuantity + 1,
    }));
  }

  quantitySub(id, quantidade) {
    if (quantidade === 1) {
      return;
    }
    this.setState((prevState) => ({
      [id]: prevState[id] ? prevState[id] - 1 : 1,
      totalQuantity: prevState.totalQuantity === 1 ? 1 : prevState.totalQuantity - 1,
    }));
  }

  render() {
    const { totalQuantity } = this.state;
    const { cartAdd, removeItem } = this.props;
    const totalPrice = cartAdd.reduce((acc, item) => {
      const { [item.id]: quant } = this.state;
      const quantidade = quant || 1;
      return (quantidade * item.price + acc);
    }, 0);
    const carrinhoVazio = (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
    const carrinhoCheio = (
      <div>
        {cartAdd.map((item) => {
          const { [item.id]: quantidade = 1 } = this.state;
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
                onClick={ () => this.quantitySum(item.id) }
                name={ item.id }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                onClick={ () => this.quantitySub(item.id, quantidade) }
                name={ item.id }
                data-testid="product-decrease-quantity"
              >
                -
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
          {`Total de itens: ${totalQuantity}`}
        </p>
        <p>
          Valor Total da Compra: R$
          {totalPrice}
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
