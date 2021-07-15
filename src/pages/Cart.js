import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EmptyCart from '../components/EmptyCart';
import CartList from '../components/CartList';

class Cart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.getLocalStorageProducts = this.getLocalStorageProducts.bind(this);
  }

  componentDidMount() {
    this.getLocalStorageProducts();
  }

  getLocalStorageProducts() {
    const keys = Object.keys(localStorage);
    this.setState({
      products: keys.map((key) => JSON.parse(localStorage.getItem(key))),
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <Link to="/">
          <i className="fas fa-undo-alt" />
        </Link>
        <CartList products={ products } />
        {
          products.length === 0 && <EmptyCart />
        }
      </div>
    );
  }
}

export default Cart;
