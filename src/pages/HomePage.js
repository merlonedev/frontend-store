import React from 'react';
import CartButton from '../components/CartButton';
import InicialMessage from '../components/InicialMessage';
import ProductList from '../components/ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from '../components/CategoryList';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      search: '',
      // results: '',
      products: [],
      shoppingCart: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.queryProducts = this.queryProducts.bind(this);
    this.setShoppingCart = this.setShoppingCart.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  async setShoppingCart({ target: { id: idCategoria, value: idProduct } }) {
    const { results } = await getProductsFromCategoryAndQuery(idCategoria, '');
    const product = results.find((e) => e.id === idProduct);

    this.setState((state) => ({
      shoppingCart: [...state.shoppingCart, product],
    }));
  }

  async queryProducts() {
    const { search } = this.state;
    const { results } = await getProductsFromCategoryAndQuery('', search);

    this.setState({
      products: results,
    });
  }

  render() {
    const { search, products, shoppingCart } = this.state;
    return (
      <div>
        <input
          data-testid="query-input"
          type="text"
          name="search"
          value={ search }
          onChange={ this.handleChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.queryProducts }
        >
          Pesquisar
        </button>
        <CartButton shoppingCart={ shoppingCart } />
        { products.length > 0
          ? <ProductList products={ products } setShoppingCart={ this.setShoppingCart } />
          : <InicialMessage /> }
        <CategoryList />
      </div>
    );
  }
}

export default HomePage;
