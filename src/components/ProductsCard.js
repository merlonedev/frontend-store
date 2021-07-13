import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    if (!product) {
      return <div>Nenhum produto encontrado</div>;
    }
    return (
      <div>
        {product.map((item) => (
          <div data-testid="product" key={ item.id }>
            <h1>{ item.title }</h1>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>{ item.price }</p>
          </div>
        ))}
      </div>
    );
  }
}
export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.array.isRequired,
}.isRequired;
