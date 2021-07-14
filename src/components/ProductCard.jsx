import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';

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
      <div data-testid="product" className="product-card">
        <div className="product-each">
          <div className="product-spec">
            <p className="product-title">{title}</p>
            <img
              className="product-img"
              src={ thumbnail.replace('I.jpg', 'O.jpg') }
              alt={ title }
            />
            <p className="product-price">
              <span>
                R$
                { price }
              </span>
            </p>
          </div>
          <div className="product-btns">
            <button
              data-testid="product-add-to-cart"
              onClick={ this.addToStorage }
              type="button"
              className="product-btn"
            >
              Adicionar ao carrinho
            </button>
            <Link
              className="product-link"
              data-testid="product-detail-link"
              to={ `/item/${category}/${id}` }
            >
              Mais Detalhes
            </Link>
          </div>
        </div>
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
