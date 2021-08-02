import React from 'react';
import Search from './search';
import ProductList from './productList';
import MarketButton from '../components/marketButton';

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
