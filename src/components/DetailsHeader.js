import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class DetailsHeader extends Component {
  render() {
    const { title, price } = this.props;

    return (
      <div className="details-header-container">
        <div className="details-menu">
          <Link className="material-icons previous" to="/"> arrow_back </Link>
          <Link
            className="material-icons cart details-cart"
            data-testid="shopping-cart-button"
            to="/cart"
          >
            shopping_cart
          </Link>
        </div>
        <h1 className="details-title" data-testid="product-detail-name">
          { `${title} - R$ ${price}` }
        </h1>
      </div>
    );
  }
}

DetailsHeader.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string.isRequired,
};

DetailsHeader.defaultProps = {
  title: undefined,
};

export default DetailsHeader;
