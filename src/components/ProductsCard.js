import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, cartAdd } = this.props;
    if (!product) {
      return <div>Nenhum produto encontrado</div>;
    }
    return (
      <div>
        {product.map((item) => (
          <div data-testid="product" key={ item.id }>
            <h1>{ item.title }</h1>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>
              R$
              { item.price }
            </p>
            <div>
              <Link
                to={ `/detalhes/${encodeURIComponent(item.title)}/${item.id}` }
                data-testid="product-detail-link"
              >
                Detalhes do produto
              </Link>
            </div>
            <div>
              <button
                type="button"
                data-testid="product-add-to-cart"
                onClick={ () => cartAdd(item) }
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.array.isRequired,
  cartAdd: PropTypes.func.isRequired,
}.isRequired;

export default ProductCard;
