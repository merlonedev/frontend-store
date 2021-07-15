import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
import Cardproduct from '../Components/ProductCard';
import '../styles/productList.css';

class Products extends Component {
  render() {
    const { productList, addToCart } = this.props;
    if (productList.length === 0) {
      return <NotFound />;
    }

    return (
      <div>
        { productList.map((product) => (
          <div className="product-list" key={ product.id }>
            <Cardproduct
              shipping={ product.shipping }
              title={ product.title }
              img={ product.thumbnail }
              price={ product.price }
              id={ product.id }
              categoryId={ product.category_id }
              addToCart={ () => addToCart(product) }
            />
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default Products;
