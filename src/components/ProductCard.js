import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const {
      product,
      product: {
        id,
        description,
        prodImg,
        price,
        shipping,
      },
    } = this.props;

    return (
      <div className="product-card">
        <Link
          to={ {
            pathname: `/detalhes/${id}`,
            state: product,
          } }
        >
          <h2>{description}</h2>
          <img src={ prodImg } alt="Product Thumbnail" />
          <p>
            Preço: R$
            {price}
          </p>
          <p>
            frete
            {shipping}
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
