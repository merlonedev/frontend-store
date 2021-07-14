import React from 'react';
import PropTypes from 'prop-types';

class ProductDetail extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;

    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <span>{ price }</span>
        <ul>
          {attributes.map((attribute, index) => (
            <li key={ index }>
              {`${attribute.name}: ${attribute.value_name}`}
            </li>))}
        </ul>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        attributes: PropTypes.shape({
          map: PropTypes.func,
          name: PropTypes.string,
          value_name: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default ProductDetail;
