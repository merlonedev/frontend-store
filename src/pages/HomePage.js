import React from 'react';
import SearchInput from '../components/SearchInput';
import ProductList from '../components/ProductList';
import * as api from '../services/api';
import CartItems from '../components/CartItems';
import Category from '../components/Category';

class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      query: '',
      // categoryId: '',

    };

    this.fetchProducts = this.fetchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  handleChange(event) {
    console.log('ola');
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { query } = this.state;
    this.fetchProducts('', query);
  }

  async fetchProducts(categoryId, query) {
    const response = await api.getProductsFromCategoryAndQuery(categoryId, query);
    this.setState({
      products: response.results,
    });
  }

  render() {
    const { products, query } = this.state;

    // if (products.length === 0) {
    //   return (
    //     <div>
    //       <SearchInput />
    //       <p>Nenhum produto foi encontrado</p>
    //     </div>);
    // }
    return (
      <div>
        <SearchInput
          name="query"
          value={ query }
          onChange={ this.handleChange }
          onClick={ this.handleClick }
        />
        <ProductList products={ products } />
        <CartItems />
        <aside>
          <Category />
        </aside>
      </div>
    );
  }
}

export default HomePage;
