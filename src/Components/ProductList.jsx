import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import NotFound from './NotFound';

export default class ProductList extends React.Component {
  render() {
    const { products, storeItems } = this.props;
    const productList = (
      <div>
        { products.map((p) => (<ProductCard
          key={ p.id }
          product={ p }
          storeItems={ storeItems }
        />)) }
      </div>
    );
    return (
      <div>
        { (!products.length) ? <NotFound /> : productList }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  storeItems: PropTypes.func.isRequired,
};
