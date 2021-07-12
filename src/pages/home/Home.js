import React from 'react';
import Search from '../../components/search/Search';
/* import ProductList from '../../components/productList/ProductList'; */
import MarketButton from '../../components/marketButton/MarketButton';
import ProductCategories from '../../components/productCategories/ProductCategories';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <section>
        <ProductCategories />
        <Search />
        <MarketButton />
      </section>
    );
  }
}

export default Home;
