import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, localChanger } = this.props;
    return (
      <div data-testid="product">
        <h1>{ product.title}</h1>
        <img src={ product.thumbnail } alt={ product.id } />
        <p>
          R$
          {product.price}
        </p>
        <button
          onClick={ () => localChanger(product) }
          data-testid="product-add-to-cart"
          type="button"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf(String),
  localChanger: PropTypes.func.isRequired,

};

ProductCard.defaultProps = {
  product: undefined,
};

export default ProductCard;
