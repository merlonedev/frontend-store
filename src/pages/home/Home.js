import React from 'react';
import Search from '../../components/search/Search';
import ProductList from '../../components/productList/ProductList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <>
        <Search />
        <ProductList />
      </>
    );
  }
}

export default Home;
