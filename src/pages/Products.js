import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
import Cardproduct from '../Components/ProductCard';

class Products extends Component {
  render() {
    const { productList, addToCart } = this.props;
    if (productList.length === 0) {
      return <NotFound />;
    }

    return (
      <div>
        { productList.map((product) => (
          <div key={ product.id }>
            <Cardproduct
              title={ product.title }
              img={ product.thumbnail }
              price={ product.price }
              id={ product.id }
              categoryId={ product.category_id }
            />
            <button
              type="button"
              onClick={ () => addToCart(product) }
              data-testid="product-add-to-cart"
            >
              Adicionar ao Carrinho
            </button>
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
