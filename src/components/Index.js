import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Categories from './categoriesList';
import Card from './card';
import { getProductsFromCategoryAndQuery } from '../services/api';

// Cria input do tipo texto e adicionar uma tag p dando instruções iniciais e o renderiza no App.
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
      items: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      searchBar: target.value,
    });
  }

  handleClick({ target }) {
    this.handleButton(target.value);
  }

  // funcao que captura os produtos por categoria
  async handleButton(searchBar) {
    const response = await getProductsFromCategoryAndQuery('', searchBar);
    this.setState({
      items: response.results,
    });
  }

  render() {
    const { searchBar, items } = this.state;
    const { addCartItem, count } = this.props;
    return (
      <>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1
            .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607
            1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5
            12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7
            1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
            />
          </svg>
          <span data-testid="shopping-cart-size">{count}</span>
        </div>
        <div>
          <input
            type="text"
            data-testid="query-input"
            value={ searchBar }
            onChange={ this.handleInput }
          />
          <button
            type="button"
            onClick={ () => this.handleButton(searchBar) }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* Criado um link para que ao ser clicado redirecionar
        para o component ShoppingCart */}
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <Categories handleClick={ this.handleClick } />
        <div className="products-div">
          {items.length < 1
            ? <h3>Nenhum produto foi encontrado</h3>
            : items.map(
              (obj) => <Card item={ obj } key={ obj.id } addCartItem={ addCartItem } />,
            )}
        </div>
      </>
    );
  }
}

Index.propTypes = {
  addCartItem: PropTypes.func,
}.isRequired;

export default Index;
