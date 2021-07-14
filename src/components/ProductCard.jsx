import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      category: props.category,
    };
    this.addToStorage = this.addToStorage.bind(this);
  }

  addToStorage() {
    const { product } = this.props;
    localStorage.setItem(
      product.id,
      JSON.stringify(product),
    );
  }

  render() {
    const {
      product: {
        id,
        category_id: categoryId,
        title,
        thumbnail,
        price },
      category,
    } = this.state;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail.replace('I.jpg', 'O.jpg') } alt={ title } />
        <p>
          { (price || 0).toLocaleString('pt-BR', {
            minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) }
        </p>
        <button
          data-testid="product-add-to-cart"
          onClick={ this.addToStorage }
          type="button"
        >
          Adicionar ao carrinho
        </button>
        <Link
          data-testid="product-detail-link"
          to={ `/item/${category || categoryId}/${id}` }
        >
          Mais Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    category_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number,
  }).isRequired,
  category: PropTypes.string,
};

ProductCard.defaultProps = {
  category: '',
};

export default ProductCard;
