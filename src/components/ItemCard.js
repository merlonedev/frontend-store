import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

class ItemCard extends React.Component {
  render() {
    const {
      item: { id,
        category_id: category,
        title,
        thumbnail,
        price } } = this.props;
    return (
      <div data-testid="product">
        <h1>{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <Link
          data-testid="product-detail-link"
          to={ `/item/${category}/${id}` }
        >
          Mais Detalhes:
        </Link>
        <AddToCart  itemId={ id }/>
      </div>
    );
  }
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemCard;
