import React from 'react';
import PropTypes from 'prop-types';

class ShowDetails extends React.Component {
  render() {
    const { product } = this.props;
    const { attributes, title, thumbnail, price } = product;
    return (
      <div>
        <div>
          <p data-testid="product-detail-name">{title}</p>
          <p>
            R$
            {` ${price}`}
          </p>
          <img src={ thumbnail } alt="Foto do produto" />
        </div>
        <div>
          {attributes.map((attribute) => (
            <p key={ attribute.id }>
              {attribute.name}
              :
              {` ${attribute.value_name}`}
            </p>
          ))}
        </div>
      </div>
    );
  }
}

ShowDetails.propTypes = {
  product: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ShowDetails;
