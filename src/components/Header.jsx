import React, { Component } from 'react';
import Logo from '../img/se_vira_logo.png';
// import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="page-header">
        <h1 className="page-title"><img className="logo" src={ Logo } alt="logo" /></h1>
        {/* <button type="button">
          <Link to="/cart">
            Carrinho
          </Link>
        </button> */}
      </header>
    );
  }
}
