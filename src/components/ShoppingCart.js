import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalQuantity: props.cartAdd.length,
      cartAdd: props.cartAdd,
      price: props.price,
    };

    this.quantitySum = this.quantitySum.bind(this);
    this.quantitySub = this.quantitySub.bind(this);
  }

  quantitySum({ target }) {
    const { name } = target;
    this.setState((prevState) => ({
      [name]: prevState[name] ? prevState[name] + 1 : 2,
      totalQuantity: prevState.totalQuantity + 1,
    }));
  }

  quantitySub({ target }) {
    const { name } = target;
    this.setState((prevState) => ({
      [name]: prevState[name] ? prevState[name] - 1 : 1,
      totalQuantity: prevState.totalQuantity ? prevState.totalQuantity - 1 : 1,
    }));
  }

  render() {
    const { totalQuantity, price } = this.state;
    const { cartAdd } = this.props;
    const carrinhoVazio = (
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    );
    const carrinhoCheio = (
      <div>
        {cartAdd.map((item, index) => {
          const { [item.id]: quantidade } = this.state;
          return (
            <div key={ item.id }>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <p>
                Preço:R$
                {typeof quantidade === 'number' ? price[index] * quantidade : price }
              </p>
              <img src={ item.thumbnail } alt={ item.title } />
              <button
                type="button"
                onClick={ this.quantitySum }
                name={ item.id }
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                type="button"
                onClick={ this.quantitySub }
                name={ item.id }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p>
                Quantidade:
                { quantidade || 1 }
              </p>
            </div>
          );
        })}
        <p
          data-testid="shopping-cart-product-quantity"
        >
          {`Total de itens: ${totalQuantity}`}
        </p>
        <p>
          Valor Total da Compra: R$
          {price.length === 0 ? 0 : price.reduce((acc, numb) => acc + numb)}
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
