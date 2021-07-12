import React from 'react';
import * as api from '../services/api';
import CategoriesFilter from '../components/CategoriesFilter';

class ListItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const response = await api.getCategories();
    this.setState({
      categories: [...response],
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="search-bar">
            <input id="search-bar" type="text" />
          </label>
        </form>
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <CategoriesFilter categories={ categories } />
      </div>
    );
  }
}

export default ListItens;
