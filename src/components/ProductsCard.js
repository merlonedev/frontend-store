import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
            <Link
              to={ `/detalhes/${item.title}/${item.id}` }
              data-testid="product-detail-link"
            >
              Detalhes do produto
            </Link>
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
