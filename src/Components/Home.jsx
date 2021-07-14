import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductFilter from './ProductFilter';

class Home extends React.Component {
  constructor(props) {
    super(props);
    const initialState = {
      search: '',
      products: [],
    };

    this.state = initialState;
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
  }

  onChange({ target: { value } }) {
    this.setState({
      search: value,
    });
  }

  async onClick() {
    const { search, category_id } = this.state;
    const products = await getProductsFromCategoryAndQuery(category_id, `$${search}`);
    const { results } = products;
    this.setState({
      products: results,
      search: '',
    });
  }

  async categoryChange(category) {
    const products = await getProductsFromCategoryAndQuery(category, category);
    this.setState({
      products: products.results,
    });
  }

  render() {
    const { products, search } = this.state;
    return (
      <div>
        <header className="header">
          <p className="pageName">
            Undefined FrontEnd Online Store
          </p>
          <Link to="/Cart" data-testid="shopping-cart-button" />
          <label
            htmlFor="searchText"
            data-testid="home-initial-message"
            className="searchText"
          >
            <input
              type="text"
              name="searchText"
              className="searchInput"
              placeholder="Search"
              data-testid="query-input"
              id="search-bar"
              value={ search }
              onChange={ this.onChange }
            />
            <p className="infoText">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
            <button
              data-testid="query-button"
              onClick={ this.onClick }
              type="button"
              className="searchBtn"
            >
              Buscar
            </button>
          </label>
        </header>
        <section className="mainSection">
          <NavBar click={ this.categoryChange } />
          <ProductFilter products={ products } />
        </section>
      </div>
    );
  }
}
export default Home;
