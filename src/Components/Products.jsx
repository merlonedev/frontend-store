import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Products extends Component {
  render() {
    const { title, img, price, categoryId, id } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ img } width="50px" alt="produto" />
        <p>{ price }</p>
        <Link
          to={ `/product-detail/${categoryId}/${id}` }
          data-testid="product-detail-link"
        >
          Ver Detalhes
        </Link>
      </div>
    );
  }
}

Products.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  categoryId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Products;
