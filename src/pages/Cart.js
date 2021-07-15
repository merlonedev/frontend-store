import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
    };
    this.addStorage = this.addStorage.bind(this);
  }

  componentDidMount() {
    this.addStorage();
  }

  addStorage() {
    const storage = JSON.parse(localStorage.getItem('itens'));
    if (storage) {
      this.setState({
        carrinho: storage,
      });
    }
  }

  render() {
    const { carrinho } = this.state;
    if (carrinho.length === 0) {
      return (
        <div className="cart">
          <Link
            className="link"
            to="/"
          >
            Página Principal
          </Link>
          <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        </div>
      );
    }
    return (
      <div className="cart">
        <Link
          className="link"
          to="/"
        >
          Página Principal
        </Link>
        {(carrinho && <ShoppingCart carrinho={ carrinho } />)}
      </div>
    );
  }
}

export default Cart;
