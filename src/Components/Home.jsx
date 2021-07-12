import React from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductFilter from './ProductFilter';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      products: [],
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState({
      search: value,
    });
  }

  async onClick() {
    const { search } = this.state;
    const products = await getProductsFromCategoryAndQuery('$categoryId', `$${search}`);
    const { results } = products;
    this.setState({
      products: results,
      search: '',
    });
  }

  render() {
    const { products, search } = this.state;
    return (
      <div>
        <header className="header">
          <Link to="/Cart" data-testid="shopping-cart-button" />
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
              data-testid="query-input"
              id="search-bar"
              value={ search }
              onChange={ this.onChange }
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <button
            data-testid="query-button"
            onClick={ this.onClick }
            type="button"
          >
            Buscar
          </button>
        </header>
        <ProductFilter products={ products } />
      </div>
    );
  }
}
export default Home;
