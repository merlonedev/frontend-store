import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;

    return (
      <section data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}` }</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
