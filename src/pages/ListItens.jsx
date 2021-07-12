import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

class ListItens extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="search-bar">
          <input id="search-bar" type="text" />
          <button type="button">
            <Link to="/cart" data-testid="shopping-cart-button">
              <FiShoppingCart />
            </Link>
          </button>
        </label>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      </div>
    );
  }
}

export default ListItens;
