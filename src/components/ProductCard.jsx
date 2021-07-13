import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id, category_id: categoryId } = product;
    return (
      <div
        data-testid="product"
        className="product-card"
      >
        <Link to={ `/details/${categoryId}-${id}` }>
          <h1>{ title }</h1>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
        </Link>
        {console.log(product)}
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
