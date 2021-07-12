import React from 'react';
import Search from '../../components/search/Search';
import ProductList from '../../components/productList/ProductList';
import MarketButton from '../../components/marketButton/MarketButton';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <section>
        <Search />
        <MarketButton />
        <ProductList />
      </section>
    );
  }
}

export default Home;
