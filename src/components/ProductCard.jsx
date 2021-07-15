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
    const { addToCartItems, product } = this.props;
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
          onClick={ () => addToCartItems(product) }
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
    thumbnail: PropTypes.node.isRequired,
    price: PropTypes.node,
  }).isRequired,
  category: PropTypes.string,
  addToCartItems: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
  category: '',
};

export default ProductCard;
