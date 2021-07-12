import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryAside from '../components/CategoryAside';

import ProductCard from '../components/ProductCard';

const initialState = {
  categoryId: '',
  queryText: '',
  products: [],
  didSearch: false,
  categories: [],
};
class Home extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.resulting = this.resulting.bind(this);
    this.categoryApi = this.categoryApi.bind(this);

    this.state = initialState;
  }

  componentDidMount() {
    this.categoryApi();
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  async categoryApi() {
    const newCagories = await getCategories();
    this.setState({ categories: newCagories });
  }

  async resulting() {
    const { queryText, categoryId } = this.state;
    const { results } = await getProductsFromCategoryAndQuery(categoryId, queryText);
    this.setState({
      products: results,
      didSearch: true,
    });
  }

  render() {
    const {
      queryText,
      products,
      didSearch,
      categories,
    } = this.state;

    const initialMsg = (
      <p
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    const notFoundMsg = <p>Nenhum produto foi encontrado</p>;
    const msg = didSearch ? notFoundMsg : initialMsg;

    return (
      <section>
        <input
          name="queryText"
          value={ queryText }
          onChange={ this.handleChange }
          data-testid="query-input"
          type="text"
        />
        <button
          type="button"
          onClick={ this.resulting }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
        <CategoryAside categoryObj={ categories } />
        { (products.length > 0)
          ? products.map(({ id, title, thumbnail, price }) => (
            <ProductCard
              key={ id }
              title={ title }
              thumbnail={ thumbnail }
              price={ price }
            />))
          : msg }
      </section>
    );
  }
}

export default Home;
