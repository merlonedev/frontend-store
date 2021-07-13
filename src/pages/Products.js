import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
import Cardproduct from '../Components/ProductCard';

class Products extends Component {
  render() {
    const { productList } = this.props;
    if (productList.length === 0) {
      return <NotFound />;
    }

    return (
      <div>
        { productList.map((product) => (
          <Cardproduct
            key={ product.id }
            title={ product.title }
            img={ product.thumbnail }
            price={ product.price }
            id={ product.id }
            categoryId={ product.category_id }
          />
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Products;
