import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/ProductCard.css';

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
      <div data-testid="product" className="product-card">
        <div className="product-each">
          <div className="product-spec">
            <p className="product-title">{title}</p>
            <img
              className="product-img"
              src={ thumbnail.replace('I.jpg', 'O.jpg') }
              alt={ title }
            />
            <p lassName="product-price">
              { (price || 0).toLocaleString('pt-BR', {
                minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) }
            </p>
          </div>
          <div className="product-btns">
            <button
              data-testid="product-add-to-cart"
              onClick={ () => addToCartItems(product) }
              type="button"
              className="product-btn"
            >
              Adicionar ao carrinho
            </button>
            <Link
              className="product-link"
              data-testid="product-detail-link"
              to={ `/item/${category || categoryId}/${id}` }
            >
              Mais Detalhes
            </Link>
          </div>
        </div>
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
