import React, { Component } from 'react';
import Loading from '../components/Loading';
import ShoppingCart from '../components/ShoppingCart';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
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
        loading: false,
      });
    }
  }

  render() {
    const { loading, carrinho } = this.state;
    if (loading) {
      return <Loading />;
    }
    return (
      <div>
        {(carrinho && <ShoppingCart carrinho={ carrinho } />)}
        {(!carrinho
          && <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
        )}
      </div>
    );
  }
}

export default Cart;
