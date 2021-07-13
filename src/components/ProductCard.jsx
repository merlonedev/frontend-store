import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.addToStorage = this.addToStorage.bind(this);
  }

  addToStorage() {
    const { product } = this.props;
    localStorage.setItem(
      product.id,
      JSON.stringify(product),
    );
  }

  render() {
    const {
      product: { id,
        category_id: category,
        title,
        thumbnail,
        price } } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail.replace('I.jpg', 'O.jpg') } alt={ title } />
        <p>{price}</p>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.addToStorage }
          type="button"
          id="id"
        >
          Adicionar ao carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ `/item/${category}/${id}` }
        >
          Mais Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
