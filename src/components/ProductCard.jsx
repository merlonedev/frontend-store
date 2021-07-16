import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/ProductCard.css';
import { FaTruckMoving } from 'react-icons/fa';

class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    const freeShipping = props.product.shipping.free_shipping;
    this.state = {
      product: props.product,
      category: props.category,
      freeShipping,
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
      freeShipping,
    } = this.state;
    const { addToCartItems, product } = this.props;
    return (
      <div data-testid="product" className="product-card">
        <div className="product-each">
          <div className="product-spec">
            { freeShipping
              ? (
                <div>
                  <FaTruckMoving data-testid="free-shipping" id="shipping-free" />
                  <span>Frete Grátis</span>
                </div>)
              : '' }
            {/* Icone retirado de https://react-icons.github.io/react-icons/ */}
            <p className="product-title">{title}</p>
            <img
              className="product-img"
              src={ thumbnail.replace('I.jpg', 'O.jpg') }
              alt={ title }
            />
          </div>
          <p className="product-price">
            <span>
              { (price || 0).toLocaleString('pt-BR', {
                minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) }
            </span>
          </p>
          <div className="cart-details">
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  category: PropTypes.string,
  addToCartItems: PropTypes.func.isRequired,
};

ProductCard.defaultProps = {
  category: '',
};

export default ProductCard;
