import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

export default class ProductList extends Component {
  render() {
    const { list } = this.props;

    return (
      <section>
        <section className="product-list">
          { list
            .map((product) => <ProductCard key={ product.id } product={ product } />) }
        </section>
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </section>
    );
  }
}

ProductList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
};
