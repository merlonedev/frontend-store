import React from 'react';
import Search from './search';
import ProductList from './productList';

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
