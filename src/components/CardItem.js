import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CardItem.css';

class CardItem extends Component {
  render() {
    const {
      title,
      thumbnail,
      price,
      itemId,
    } = this.props;
    return (
      <div data-testid="product" className="card-item">
        <Link to={ `/details/${itemId}` } data-testid="product-detail-link">
          <p>
            { title }
          </p>
          <img alt="" src={ thumbnail } />
          <p>
            R$
            { price }
          </p>
        </Link>
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardItem;
