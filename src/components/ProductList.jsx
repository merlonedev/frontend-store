import React from 'react';
import * as api from '../services/api';
import Product from './Product';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      query: '',
      searchResult: [],
    };
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  async handleClick() {
    const { query } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(query, query)
      .then((prod) => prod.results);

    this.setState({
      searchResult: products,
    });
  }

  render() {
    const { searchResult } = this.state;
    return (
      <div>
        <input
          name="query"
          type="text"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
        <Link to="/productlist">ProductList</Link>
        <input type="text" />
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <div className="product-container">
          {
            searchResult.map((product) => (<Product
              key={ product.id }
              title={ product.title }
              id={ product.id }
              price={ product.price }
              thumbnail={ product.thumbnail }
            />))
          }
        </div>
      </div>
    );
  }
}

export default ProductList;
