import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div data-testid="product" className="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        { price ? <p>{ `R$ ${price.toFixed(2)}` }</p> : <p>Esgotado</p>}
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
