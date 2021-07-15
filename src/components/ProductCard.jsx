import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product, setShoppingCart } = this.props;
    const { title, thumbnail, price, id, category_id: categoryId } = product;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <h6>{ title }</h6>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
        <button
          type="button"
          value={ id }
          id={ categoryId }
          onClick={ setShoppingCart }
          data-testid="product-add-to-cart"
        >
          Adicionar
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  setShoppingCart: PropTypes.func.isRequired,
};

export default ProductCard;
