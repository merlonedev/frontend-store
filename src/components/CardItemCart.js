import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardItem.css';
import products from '../services/data';

class CardItemCart extends React.Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      itemId,
      query,
    } = this.props;
    return (
      <div className="card-item">
        <Link to={ `/details/${query}/${itemId}` } data-testid="product-detail-link">
          <p data-testid="shopping-cart-product-name">
            { title }
          </p>
          <img alt="" src={ thumbnail } />
          <p>
            R$
            { price }
          </p>
          <div className="increase-div">
            <p data-testid="shopping-cart-product-quantity">{ products.length }</p>
          </div>
        </Link>
      </div>
    );
  }
}

CardItemCart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  query: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardItemCart;
