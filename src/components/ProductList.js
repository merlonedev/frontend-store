import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  getProducts(products) {
    this.setState({
      products,
    });
  }

  render() {
    const { products } = this.state;
    return (
      <main>
        <SearchBar callBack={ this.getProducts } />
        {products
          .map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
            />))}
      </main>
    );
  }
}

export default ProductList;
