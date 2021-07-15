import React from 'react';
import { Link } from 'react-router-dom';
import CardItemCart from '../components/CardItemCart';
import productsCart from '../services/data';
import BackSVG from '../SVGs/BackSVG';

class Cart extends React.Component {
  handleClick = (itemid, { target }) => {
    const i = productsCart.findIndex((p) => p.id === itemid);
    const value = target.name === '+' ? productsCart[i].quantidade += 1
      : productsCart[i].quantidade -= 1;
    if (value < 1) productsCart[i].quantidade = 1;
    this.forceUpdate();
  }

  render() {
    if (productsCart.length < 1) {
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
        { productsCart.map((item) => (<CardItemCart
          key={ item.id }
          itemId={ item.id }
          title={ item.title }
          thumbnail={ item.thumbnail }
          price={ item.price }
          amount={ item.quantidade }
          onClick={ this.handleClick }
        />)) }
      </div>
    );
  }
}

export default Cart;
