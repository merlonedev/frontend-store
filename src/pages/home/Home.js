import React from 'react';
import Search from '../../components/search/Search';
import ProductList from '../../components/productList/ProductList';
import MarketButton from '../../components/marketButton/MarketButton';
import ProductCategories from '../../components/productCategories/ProductCategories';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.eventHandler = this.eventHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
    this.state = {
      products: undefined,
      productCategories: undefined,
      searchText: '',
    };
  }

  componentDidMount() {
    this.getProductCategories();
  }

  async getProductCategories() {
    const result = await getCategories();
    this.setState({
      productCategories: result,
    });
  }

  async searchHandler() {
    const { searchText } = this.state;
    const productsData = await getProductsFromCategoryAndQuery(null, searchText);
    this.setState({
      products: productsData.results,
    });
  }

  eventHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { products, productCategories, searchText } = this.state;
    return (
      <section>
        <Search
          searchText={ searchText }
          searchHandler={ this.searchHandler }
          eventHandler={ this.eventHandler }
        />
        <MarketButton />
        <ProductList products={ products } />
        <ProductCategories productCategories={ productCategories } />
      </section>
    );
  }
}

export default Home;
