import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail } = product;
    return (
      <div data-testid="product">
        <img alt="Foto do produto" src={ thumbnail } />
        <div className="product-card-body">
          <h4 className="product-card-title">{title}</h4>
          <h5 className="product-card-price">{`Preço: R$${price}`}</h5>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
