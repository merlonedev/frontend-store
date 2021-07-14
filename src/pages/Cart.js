import React from 'react';
import CardItemCart from '../components/CardItemCart';
import productsCart from '../services/data';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      query: 'motorola',
    };
  }

  render() {
    console.log(productsCart);
    const { query } = this.state;
    if (productsCart.length < 1) {
      return (
        <h1 className="Cart-message" data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      );
    }
    return (
      <div className="card-list">
        { productsCart.map((item) => (<CardItemCart
          key={ item.id }
          itemId={ item.id }
          query={ query }
          title={ item.title }
          thumbnail={ item.thumbnail }
          price={ item.price }
        />)) }
      </div>
    );
  }
}

export default Cart;
