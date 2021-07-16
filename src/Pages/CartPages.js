import React, { Component } from 'react';
import CartItemProduct from '../Components/CartItemProduct';

class CartPages extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        ...this.getItens(),
      ],
      clicks: 1,
    };

    this.getItens = this.getItens.bind(this);
    this.renderCartItens = this.renderCartItens.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.plusClickState = this.plusClickState.bind(this);
    this.minusClickState = this.minusClickState.bind(this);
  }

  getItens() {
    const keys = Object.keys(localStorage);
    const array = keys.filter((key) => key.includes('MLB'));
    return array.map((key) => JSON.parse(localStorage.getItem(key)));
  }

  removeFromCart() {
    localStorage.clear();
    this.setState({ products: [] });
  }

  plusClickState() {
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }));
  }

  minusClickState() {
    const { clicks } = this.state;
    if (clicks === 0 || clicks > 1) {
      this.setState({ clicks: clicks - 1 });
    }
  }

  renderCartItens() {
    const { products, clicks } = this.state;
    if (products.length > 0) {
      const teste = products.reduce(
        (accumulator, curentValue) => accumulator + (curentValue.price * clicks), 0,
      );
      console.log(teste);
      return (
        <div>
          <div>
            <button
              type="button"
              onClick={ this.removeFromCart }
            >
              X
            </button>
          </div>
          { products.map((product) => (
            <div key={ product.id }>
              <CartItemProduct
                key={ product.id }
                product={ product }
                handlePlusButton={ this.plusClickState }
                handleMinusButton={ this.minusClickState }
              />
            </div>
          )) }
        </div>
      );
    } return (
      <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>);
  }

  render() {
    return (
      <div>
        { this.renderCartItens() }
      </div>
    );
  }
}

export default CartPages;
