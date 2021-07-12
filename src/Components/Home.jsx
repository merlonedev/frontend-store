import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/Cart" data-testid="shopping-cart-button" />
          <input type="text" />
          <p data-testid="home-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </header>
      </div>
    );
  }
}
export default Home;
