import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categorie from '../components/Categorie';
import * as api from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
    this.categorieHandleChange = this.categorieHandleChange.bind(this);
    this.renderSideBar = this.renderSideBar.bind(this);

    this.state = {
      categories: [],
      selectedCategorie: '',
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const categoriesRequest = await api.getCategories();
    this.setState({
      categories: categoriesRequest,
    });
  }

  categorieHandleChange({ target }) {
    this.setState({
      selectedCategorie: target.value,
    });
  }

  renderSideBar() {
    const { categories, selectedCategorie } = this.state;

    return (
      <div className="category-sidebar">
        <h2 className="sidebar-title">Categorias:</h2>
        <ul className="category-list">
          { categories.map((categorie) => (
            <Categorie
              key={ categorie.id }
              categorie={ categorie }
              checked={ selectedCategorie }
              onChange={ this.categorieHandleChange }
            />
          ))}
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="home-container">
        { this.renderSideBar() }
        <div className="search-form">
          <label htmlFor="search-input">
            <input type="text" id="search-input" />
          </label>
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <Link
            className="material-icons carrinho"
            to="/carrinho"
            data-testid="shopping-cart-button"
          >
            shopping_cart
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
