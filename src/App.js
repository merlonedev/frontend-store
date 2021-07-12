import React from 'react';
import './App.css';
import { getCategories } from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = { categories: [] };
  }

  async componentDidMount() {
    await getCategories().then((r) => this.setState({ categories: r }));
  }

  componentDidUpdate() {
    const { categories } = this.state;
    const results = [];
    categories.forEach((r) => results.push(
      <li data-testid="category" key={ r.id }>
        {r.name}
      </li>,
    ));
    return results;
  }

  render() {
    return (
      <main className="main">
        <header className="header">
          <label
            htmlFor="searchText"
            data-testid="home-initial-message"
            className="searchText"
          >
            <input
              type="text"
              name="seachText"
              className="searchInput"
              placeholder="Search"
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
        </header>
        <nav>
          <ul className="categoryList">
            {this.componentDidUpdate()}
          </ul>
        </nav>
      </main>
    );
  }
}

export default App;
