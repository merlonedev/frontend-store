import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import PropTypes from 'prop-types';
import CartIcon from '../components/CartIcon';
import Form from '../components/Form';
import * as api from '../services/api';
import '../css/productDetails.css';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { productId, categoryId } } } = this.props;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, '');
    const product = await results.find((item) => item.id === productId);
    this.setState({ product: { ...product } });
  }

  render() {
    const {
      product: {
        title,
        price,
        thumbnail,
        attributes,
      },
      product,
    } = this.state;
    const { amountCart } = this.props;
    const { addToCartItems } = this.props;
    return (
      <div>
        <div className="header-details">
          <Link to="/"><TiArrowBack /></Link>
          <Link to="/cart" data-testid="shopping-cart-button" className="header-title">
            <CartIcon amount={ amountCart } />
          </Link>
        </div>
        <div className="product-info">
          <h2 data-testid="product-detail-name">
            { `${title} - `}
            <span className="product-price">
              {` ${(price || 0).toLocaleString('pt-BR', {
                minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}` }
            </span>
          </h2>
          <img
            src={ thumbnail ? thumbnail.replace('I.jpg', 'O.jpg')
              : '../images/imagem-indisponivel.jpg' }
            alt={ title }
          />
          <div className="tec-infos">
            <h3>Especificações Técnicas</h3>
            <ul>
              { (attributes || []).map(({ id, name, value_name: value }) => (
                <li key={ id }>
                  <strong>{ `${name}: ` }</strong>
                  { `${value || ''}` }
                </li>
              )) }
            </ul>
          </div>
          <div>
            <button
              data-testid="product-detail-add-to-cart"
              type="button"
              onClick={ () => addToCartItems(product) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        </div>
        <div />
        <Form />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
      categoryId: PropTypes.string,
    }),
  }).isRequired,
  amountCart: PropTypes.number,
  addToCartItems: PropTypes.func.isRequired,
};

ProductDetails.defaultProps = {
  amountCart: 0,
};

export default ProductDetails;
