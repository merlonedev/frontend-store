import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
  render() {
    return (
      <div>
        <Link to="/">VOLTAR</Link>
        <Link to="/shoppingcart">CARRINHO</Link>
        <h1>title and price</h1>
        <img src="/" alt="" />
        <div className="details">
          <h3>detalhes</h3>
          <ul>
            <li>list</li>
          </ul>
        </div>
      </div>
    );
  }
}
