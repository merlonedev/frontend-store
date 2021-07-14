import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <Link
          to={ { pathname: `/productDetail/${id}`, state: { product } } }
          data-testid="product-detail-link"
        >
          <h1>{ title }</h1>
          <img src={ thumbnail } alt={ title } />
          <span>{ price }</span>
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
