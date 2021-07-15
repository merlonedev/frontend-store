import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShopingCartItem extends React.Component {
  render() {
    const { item } = this.props;
    const { id,
      category_id: category,
      title,
      thumbnail,
      price } = item;
    return (
      <div className="cart-item">
        <div data-testid="product" className="card" style={ { width: '20rem' } }>
          <img src={ thumbnail } alt={ title } className="card-img-top" />
          <div
            className="card-body"
          >
            <h4
              className="card-title"
              data-testid="shopping-cart-product-name"
            >
              {title}
            </h4>
            <p className="card-text">
              $
              {' '}
              {price.toFixed(2)}
            </p>
            <p data-testid="shopping-cart-product-quantity">1</p>
            <Link
              className="link"
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

ShopingCartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ShopingCartItem;
