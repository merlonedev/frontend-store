import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <h1>{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default Card;
