import React from 'react';
import { Link } from 'react-router-dom';
import CardItemCart from '../components/CardItemCart';
import products from '../services/data';
import BackSVG from '../SVGs/BackSVG';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      query: 'motorola',
    };
  }

  render() {
    const { query } = this.state;
    if (products.length < 1) {
      return (
        <main>
          <div className="back-icon">
            <Link to="/">
              <BackSVG />
            </Link>
          </div>
          <h1 className="Cart-message" data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </h1>
        </main>
      );
    }
    return (
      <div className="card-list">
        <div className="back-icon">
          <Link to="/">
            <BackSVG />
          </Link>
        </div>
        { products.map((item) => (<CardItemCart
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
