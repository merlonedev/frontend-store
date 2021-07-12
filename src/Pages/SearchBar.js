import React, { Component } from 'react';
import { getCategories } from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <input
          type="text"
        />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <aside>
          <ul>
            { categories.map((categorie) => (
              <li
                data-testid="category"
                key={ categorie.name }
              >
                { categorie.name }
              </li>
            ))}
          </ul>
        </aside>
      </div>
    );
  }
}

export default SearchBar;
