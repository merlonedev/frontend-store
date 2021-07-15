import React from 'react';

class CartPage extends React.Component {
  render() {
    const { history } = this.props;
    const { shoppingCart } = history.location;

    console.log(shoppingCart);

    return (
      <div>
        <h2 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h2>
      </div>
    );
  }
}

export default CartPage;
