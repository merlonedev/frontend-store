import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Assessment from '../components/ Assessments';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        title: '',
        thumbnail: '',
        price: '',
        atributtes: [],
      },
    };

    this.fetchById = this.fetchById.bind(this);
    this.fetchDataFromProduct = this.fetchDataFromProduct.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.fetchDataFromProduct();
  }

  async fetchById(id) {
    const END_POINT = `https://api.mercadolibre.com/items?ids=${id}`;
    const response = await fetch(END_POINT);
    const data = await response.json();
    const { body: result } = data[0];
    return result;
  }

  async fetchDataFromProduct() {
    const { location: { data, state }, match: { params: { id } } } = this.props;
    const { results } = await api.getProductsFromCategoryAndQuery('', data);
    const productResult = results.find((product) => product.id === id);
    if (productResult) {
      this.setState({
        product: productResult,
      });
    } else if (state) {
      this.setState({
        product: state,
      });
    } else {
      this.setState({
        product: await this.fetchById(id),
      });
    }
  }

  addToCart() {
    const { product } = this.state;
    const { cartProducts, handleShoppingCart } = this.props;
    if (cartProducts.length === 0) {
      handleShoppingCart(cartProducts, product);
      return;
    }
    handleShoppingCart(cartProducts, product);
  }

  render() {
    const { product: { title, thumbnail, price, atributtes } } = this.state;
    const { totalQuantity } = this.props;

    return (
      <div>
        Detalhes do Produto
        <p data-testid="product-detail-name">{ title }</p>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p>{ atributtes }</p>
        <Link data-testid="shopping-cart-button" to="/CartPage">
          <button type="button">Ir para o carrinho</button>
          <span
            data-testid="shopping-cart-size"
          >
            { totalQuantity }
          </span>
        </Link>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
          type="button"
        >
          Adicionar ao carrinho
        </button>
        <Assessment />
      </div>
    );
  }
}

ProductDetail.defaultProps = {
  location: {
    data: {
      title: '',
    },
    state: {
      title: '',
      thumbnail: '',
      price: '',
      atributtes: [],
    },
  },
};

ProductDetail.propTypes = {
  location: PropTypes.shape({
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      shipping: PropTypes.shape({
        free_shipping: PropTypes.bool.isRequired,
      }).isRequired,
    }),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  cartProducts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  totalQuantity: PropTypes.number.isRequired,
  handleShoppingCart: PropTypes.func.isRequired,
};

export default ProductDetail;
