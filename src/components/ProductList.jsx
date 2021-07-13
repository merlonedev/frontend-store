import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';
import Product from './Product';
import * as Api from '../services/api';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      searchValue: '',
      category: '',
      query: '',
      searchResult: [],
      cart: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange({ target }) {
    const { value, name } = target;
    if (name === 'category') {
      this.setState({
        [name]: value,
      }, () => this.fetchProducts());
    } else {
      this.setState({
        [name]: value,
      });
    }
  }

  async handleClick() {
    const { query, category } = this.state;
    const products = await Api.getProductsFromCategoryAndQuery(category, query)
      .then((prod) => prod.results);
    this.setState({
      searchResult: products,
    });
  }

  addToCart({ target }) {
    const { name } = target;
    const { cart } = this.state;
    console.log(name);
    this.setState(() => ({
      cart: [...cart, name],
    }), () => localStorage.setItem('cart', cart));
  }

  async fetchProducts() {
    const { category, searchValue } = this.state;
    const result = await Api.getProductsFromCategoryAndQuery(category, searchValue);
    const products = result.results;
    this.setState({
      searchResult: products,
    });
  }

  async fetchCategories() {
    const request = await Api.getCategories();
    this.setState({
      categories: request,
    });
  }

  render() {
    const { searchResult, categories } = this.state;
    return (
      <div>
        <div className="search-container">
          <div className="search">
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
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img src="https://img.icons8.com/ios/50/000000/shopping-cart.png" alt="carrinho" className="cart-image" />
          </Link>
        </div>
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
        <main className="main">
          <aside className="category">
            {categories
              .map((category, index) => (
                <CategoryList
                  key={ index }
                  category={ category }
                  changeFunction={ this.handleChange }
                />))}
          </aside>
          <section className="product-container">
            {
              searchResult.map((product) => (<Product
                key={ product.id }
                title={ product.title }
                id={ product.category_id }
                productId={ product.id }
                price={ product.price }
                thumbnail={ product.thumbnail }
                onClick={ this.addToCart }
                name={ product.title }
              />))
            }
          </section>
        </main>
      </div>
    );
  }
}

export default ProductList;
