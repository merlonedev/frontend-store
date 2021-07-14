import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cardproduct extends Component {
  render() {
    const { title, img, price, id, categoryId, shipping } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ img } width="100px" alt="produto" />
        <p>
          R$
          {' '}
          { price }
        </p>
        { shipping.free_shipping && <p data-testid="free-shipping">Frete Grátis</p> }
        <Link
          to={ `/product-details/${categoryId}/${id}` }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

Cardproduct.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  shipping: PropTypes.objectOf({
    free_shipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Cardproduct;
