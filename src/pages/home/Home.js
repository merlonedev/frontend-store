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
    this.categoryHandler = this.categoryHandler.bind(this);
    this.productDetails = this.productDetails.bind(this);
    this.state = {
      products: undefined,
      productCategories: undefined,
      searchText: '',
      category: '',
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
    const { searchText, category } = this.state;
    const productsData = await getProductsFromCategoryAndQuery(category, searchText);
    this.setState({
      products: productsData.results,
    });
  }

  categoryHandler(id) {
    this.setState({
      category: id,
    }, this.searchHandler);
  }

  eventHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  productDetails(product) {
    localStorage.setItem('prdctDetails', JSON.stringify(product));
  }

  render() {
    const { products, productCategories, searchText, category } = this.state;
    return (
      <section>
        <Search
          searchText={ searchText }
          searchHandler={ this.searchHandler }
          eventHandler={ this.eventHandler }
        />
        <MarketButton />
        <ProductList
          products={ products }
          filter={ category }
          detailsHandler={ this.productDetails }
        />
        <ProductCategories
          categoryHandler={ this.categoryHandler }
          productCategories={ productCategories }
        />
      </section>
    );
  }
}

export default Home;
