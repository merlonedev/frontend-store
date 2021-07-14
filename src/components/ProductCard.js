import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const {
      product,
      product: {
        id,
        title,
        thumbnail,
        price,
      },
    } = this.props;

    return (
      <div className="product-card" data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            state: product,
          } }
        >
          <h2>{title}</h2>
          <img src={ thumbnail } alt="Product Thumbnail" />
          <p>
            {`Preço R$ ${price}`}
          </p>
        </Link>
        <button type="button">Adicionar ao Carrinho</button>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propTypes = ({
  description: PropTypes.string,
  prodImg: PropTypes.string,
  price: PropTypes.number,
  shipping: PropTypes.string,
}).isRequired;
