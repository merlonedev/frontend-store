import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.exportProduct = this.exportProduct.bind(this);
  }

  exportProduct() {
    const { product, addToCart } = this.props;
    addToCart(product);
  }

  render() {
    const { product } = this.props;
    const { id, title, thumbnail, price } = product;

    return (
      <div id={ id }>
        <img src={ thumbnail } alt="Produto" />
        <h3>{ title }</h3>
        <p>{ price }</p>
        <button
          type="button"
          onClick={ this.exportProduct }
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductCard;
