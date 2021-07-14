import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <h1 className="page-title">Mercado Se Vira nos 30</h1>
        {/* <button type="button">
          <Link to="/cart">
            Carrinho
          </Link>
        </button> */}
      </header>
    );
  }
}
