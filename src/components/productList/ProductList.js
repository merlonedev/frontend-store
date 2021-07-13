import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../productCard/ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    if (products && products.length !== 0) {
      return (
        <section>
          {
            products.map((product) => (
              <ProductCard
                key={ product.id }
                product={ product }
              />
            ))
          }
        </section>
      );
    }
    return (
      <section>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </section>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object),
};

ProductList.defaultProps = {
  products: undefined,
};

export default ProductList;
