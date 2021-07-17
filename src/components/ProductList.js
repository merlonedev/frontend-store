import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends Component {
  render() {
    const {
      productList,
      cartProducts,
      handleShoppingCart,
    } = this.props;

    const noProductFound = <p>Nenhum produto foi encontrado</p>;

    const productListFound = (
      productList.map((product) => (
        <ProductCard
          key={ product.id }
          product={ product }
          cartProducts={ cartProducts }
          handleShoppingCart={ handleShoppingCart }
        />))
    );

    return (
      (productList.length === 0) ? noProductFound : productListFound
    );
  }
}

ProductList.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  handleShoppingCart: PropTypes.func.isRequired,
};

export default ProductList;
