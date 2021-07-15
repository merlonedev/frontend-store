import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DetailsHeader, TechSpecs } from '../components';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;
    const CORRECT_SIZE = -5;

    let formatPrice = String(parseFloat((price * 100) / 100).toFixed(2));
    formatPrice = formatPrice.replace(/\./g, ',');

    return (
      <div className="details-container">
        <DetailsHeader title={ title } price={ formatPrice } />
        <div className="details-content">
          <div className="details-image-container">
            <img
              src={ `${String(thumbnail).slice(0, CORRECT_SIZE)}O.jpg` }
              className="details-image"
              alt="Imagem do Produto"
            />
          </div>
          <TechSpecs attributes={ attributes } />
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        attributes: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          value_name: PropTypes.string,
        })),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
