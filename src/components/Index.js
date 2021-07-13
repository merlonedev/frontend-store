import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  }

  // Local para carregar os dados das categorias
  componentDidMount() {
    this.fetchProductsByCategories();
  }

  // Local para alterar o DOM quando o usuário clicar em outras categorias
  // Fonte: https://pt-br.reactjs.org/docs/react-component.html#componentdidmount
  componentDidUpdate(prevProps) {
    const { categoryId, query } = this.props;
    if (prevProps.categoryId !== categoryId || prevProps.query !== query) {
      this.fetchProductsByCategories();
    }
  }

  handleInput({ target }) {
    this.setState({
      searchBar: target.value,
    });
  }

  async handleButton() {
    const { searchBar } = this.state;
    const response = await getProductsFromCategoryAndQuery('', searchBar);
    this.setState({
      items: response.results,
    });
  }

  // funcao que captura os produtos por categoria
  async fetchProductsByCategories() {
    const { categoryId, query } = this.props;
    const datas = await getProductsFromCategoryAndQuery(categoryId, query);
    const { results } = datas;
    this.setState({
      items: results,
    });
  }

  render() {
    const { searchBar, items } = this.state;
    return (
      <>
        <div>
          <input
            type="text"
            data-testid="query-input"
            value={ searchBar }
            onChange={ this.handleInput }
          />
          <button
            type="button"
            onClick={ this.handleButton }
            data-testid="query-button"
          >
            Pesquisar
          </button>
        </div>
        <input
          type="text"
        />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {/* Criado um link para que ao ser clicado redirecionar
        para o component ShoppingCart */}
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <Categories />
        <div>
          {items.length < 1
            ? <h3>Nenhum produto foi encontrado</h3>
            : items.map((obj) => <Card item={ obj } key={ obj.id } />)}
        </div>
      </>
    );
  }
}

Index.propTypes = {
  categoryId: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
};

export default Index;
