import React from 'react';
import cartIcon from '../icon/cart3.svg';

class CartPage extends React.Component {
  constructor() {
    super();

    this.state = {
      totalPrice: 0,
    };

    this.plusPrice = this.plusPrice.bind(this);
    this.minusPrice = this.minusPrice.bind(this);
  }

  plusPrice(price) {
    this.setState((oldState) => ({
      totalPrice: oldState.totalPrice + price,
    }));
  }

  minusPrice(price) {
    this.setState((oldState) => ({
      totalPrice: oldState.totalPrice - price,
    }));
  }

  render() {
    const { totalPrice } = this.state;
    return (
      <div>
        <header className="header-cart-page">
          <img src={ cartIcon } alt="cart icon" className="cart-icon" />
          <h1>Carrinho de Compras</h1>
        </header>

        <p>{`Preço Total: R$ ${totalPrice}`}</p>

      </div>
    );
  }
}

export default CartPage;
