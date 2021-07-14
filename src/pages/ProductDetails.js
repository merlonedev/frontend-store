import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CartButton from '../Components/CartButton';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
    };

    this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  async getProductDetails() {
    const { match: { params: { categoryId, id } } } = this.props;
    const productObj = await api.getProductsFromCategoryAndQuery(categoryId, '');
    const productDetails = productObj.results
      .find((product) => product.id === id);
    this.setState({ product: productDetails });
  }

  render() {
    const { product, product: { title, thumbnail, price } } = this.state;
    const { addToCart, quantity } = this.props;
    return (
      <div>
        <Link to="/">
          Página Inicial
        </Link>
        <CartButton
          quantity={ quantity }
        />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <div>
          <img src={ thumbnail } alt="product" />
          <p>
            Preço: R$
            {' '}
            { price }
          </p>
        </div>
        <form>
          <input type="email" />
          <textarea
            data-testid="product-detail-evaluation"
            name="avaliation"
            placeholder="Faça uma avaliação"
            cols="30"
            rows="10"
          />
        </form>
        <button
          type="button"
          onClick={ () => addToCart(product) }
          data-testid="product-detail-add-to-cart"
        >
          Adiciona ao Carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.string,
    }).isRequired,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
  quantity: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ProductDetails;
