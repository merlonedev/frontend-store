import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/productCard.css';

class Cardproduct extends Component {
 render() {
    const { product, title, img, price, id, categoryId, addToCart } = this.props;
    return (
      <div data-testid="product" className="card-product">
        <div className="card-product-content">
          <img src={ img } alt="produto" className="card-product-img" />
          <p className="card-product-title">{ title }</p>
          <p className="card-product-price">
            R$
            {' '}
            { price }
          </p>
          { shipping.free_shipping && <p data-testid="free-shipping">Frete Grátis</p> }
          <Link
            to={ `/product-details/${categoryId}/${id}` }
            data-testid="product-detail-link"
            className="card-product-details"
          >
            Ver Detalhes
          </Link>
        </div>
        <button
          type="button"
          onClick={ () => addToCart(product) }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Cardproduct.propTypes = {
  product: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  shipping: PropTypes.objectOf({
    free_shipping: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Cardproduct;
