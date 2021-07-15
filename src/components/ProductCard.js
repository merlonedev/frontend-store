import React from 'react';
import PropTypes from 'prop-types';
import ButtonToCard from './ButtonToCard';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;

    return (
      <section data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <ButtonToCard />
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
