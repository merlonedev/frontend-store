import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      carrinho: [],
      quantidade: 0,
    };
    this.addStorage = this.addStorage.bind(this);
    this.getQtdFromStorage = this.getQtdFromStorage.bind(this);
  }

  componentDidMount() {
    this.addStorage();
    this.getQtdFromStorage();
  }

  getQtdFromStorage() {
    const storageItems = JSON.parse(localStorage.getItem('itens'));
    const storageQtd = storageItems.reduce((acc, curr) => (acc + curr.quantity), 0);
    this.setState({
      quantidade: storageQtd,
    });
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
    const { carrinho, quantidade } = this.state;
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
        {(carrinho && <ShoppingCart updateState={ this.getQtdFromStorage } carrinho={ carrinho } />)}
        <p data-testid="shopping-cart-product-quantity">{ quantidade }</p>
      </div>
    );
  }
}

export default Cart;
