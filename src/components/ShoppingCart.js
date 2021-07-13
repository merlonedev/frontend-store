import React, { Component } from 'react';

class ShoppingCart extends Component {
  render() {
    // const { title, image, price } = this.props;

    return (
      <div data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
        <button type="button" onClick={ () => console.log(this.props) }>cliqueaki</button>
      </div>
    );
  }
}

export default ShoppingCart;
