import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class AllProducts extends Component {
  render() {
    const { searchProducts, addToCart } = this.props;
    return (
      <main className="main">
        <section className="product-container">
          {
            searchProducts.map((product) => (<Product
              key={ product.id }
              title={ product.title }
              id={ product.category_id }
              productId={ product.id }
              price={ product.price }
              thumbnail={ product.thumbnail }
              addToCart={ () => addToCart(product) }
              shipping={ product.shipping.free_shipping }
            />))
          }
        </section>
      </main>
    );
  }
}

AllProducts.propTypes = {
  searchProducts: PropTypes.arrayOf(PropTypes.object),
}.isRequired;

export default AllProducts;
