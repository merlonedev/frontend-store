import React from 'react';
import './styles/HomePage.css';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import CategoriesList from './CategoriesList';

export default class HomePage extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.fetchAPI = this.fetchAPI.bind(this);
    this.genericFunc = this.genericFunc.bind(this);

    this.state = {
      produto: '',
      itens: [],
      categorias: [],
      categoriaEscolhida: 'MLB1055',
    };
  }

  async componentDidMount() {
    await this.fetchAPI();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState((prevState) => ({
      ...prevState,
      produto: value,
    }));
    console.log(name);
  }

  async genericFunc() {
    const { produto, categoriaEscolhida } = this.state;
    const allItems = await getProductsFromCategoryAndQuery(categoriaEscolhida, produto);
    const allCategories = await getCategories();
    if (allItems && allCategories) {
      const newObj = {
        results: allItems.results,
        allCategories,
      };
      return newObj;
    }
    return {
      allCategories,
    };
  }

  async fetchAPI() {
    const { results, allCategories } = await this.genericFunc();
    if (results && allCategories) {
      this.setState({
        categorias: allCategories,
        itens: results,
      });
    } else {
      this.setState({
        categorias: allCategories,
      });
    }
  }

  render() {
    const { itens, categorias } = this.state;
    return (
      <section>
        <CategoriesList
          categorias={ categorias }
        />
        <div>
          <input type="text" data-testid="query-input" onChange={ this.handleChange } />
          <button
            data-testid="query-button"
            type="button"
            onClick={ () => this.fetchAPI() }
          >
            Pesquisar
          </button>
          <Link to="/shoppingcart" data-testid="shopping-cart-button">
            Carrinho de Compras
          </Link>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div className="items-container">
          {
            itens && itens.map(({ id, title, thumbnail, price }) => (
              <div
                data-testid="product"
                key={ id }
                className="each-item"
              >
                <h3>{title}</h3>
                <img src={ thumbnail } alt="Foto do Produto" />
                <p>{`R$${price}`}</p>
              </div>
            ))
          }
        </div>
      </section>
    );
  }
}
