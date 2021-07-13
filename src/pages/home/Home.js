import React from 'react';
import Search from '../../components/search/Search';
import ProductList from '../../components/productList/ProductList';
import MarketButton from '../../components/marketButton/MarketButton';
import ProductCategories from '../../components/productCategories/ProductCategories';
import { getCategories } from '../../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.eventHandler = this.eventHandler.bind(this);
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

  eventHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { products, productCategories, searchText } = this.state;
    return (
      <section>
        <Search searchText={ searchText } eventHandler={ this.eventHandler } />
        <ProductCategories productCategories={ productCategories } />
        <MarketButton />
        <ProductList products={ products } />
      </section>
    );
  }
}

export default Home;
