import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import PropTypes from 'prop-types';
import { FaTruckMoving } from 'react-icons/fa';
import Loading from '../components/Loading';
import Form from '../components/Form';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
      shipping: false,
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
    const freeShipping = product.shipping.free_shipping;
    this.setState({ product: { ...product }, loading: false, shipping: freeShipping });
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
      loading,
      shipping,
    } = this.state;
    console.log(shipping);
    // const freeShipping = shipping.free_shipping;
    const { addToCartItems } = this.props;
    if (loading) return <Loading />;
    return (
      <div>
        <Link to="/"><TiArrowBack /></Link>
        <Link to="/cart" data-testid="shopping-cart-button">
          {/* <FiShoppingCart /> */}
        </Link>
        <h2 data-testid="product-detail-name">
          { `${title} - ${(price || 0).toLocaleString('pt-BR', {
            minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}` }
        </h2>
        { shipping
          ? (
            <div>
              <FaTruckMoving data-testid="free-shipping" id="shipping-free" />
              <span>Frete Grátis</span>
            </div>)
          : '' }
        {/* Icone retirado de https://react-icons.github.io/react-icons/ */}
        <div>
          <img src={ thumbnail.replace('I.jpg', 'O.jpg') } alt={ title } />
          <div>
            <h3>Especificações Técnicas</h3>
            <ul>
              { attributes.map(({ id, name, value_name: value }) => (
                <li key={ id }>
                  <strong>{ `${name}: ` }</strong>
                  { `${value}` }
                </li>
              )) }
            </ul>
          </div>
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
      shipping: PropTypes.shape({
        free_shipping: PropTypes.bool.isRequired,
      }).isRequired,
    }),
  }).isRequired,
  addToCartItems: PropTypes.func.isRequired,
};

export default ProductDetails;
