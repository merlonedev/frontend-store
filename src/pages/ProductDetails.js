import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DetailsHeader, TechSpecs } from '../components';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
    this.cartHandleCounter = this.cartHandleCounter.bind(this);
    this.loadCart = this.loadCart.bind(this);
    this.saveCart = this.saveCart.bind(this);

    this.state = {
      totalCartItems: 0,
      cartItems: [],
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  componentDidUpdate(prevProps, prevState) {
    const { cartItems, totalCartItems } = this.state;
    if ((prevState.cartItems !== cartItems)
    || (prevState.totalCartItems !== totalCartItems)) {
      this.saveCart();
    }
  }

  cartHandleCounter() {
    this.setState((prevState) => ({
      totalCartItems: prevState.totalCartItems + 1,
    }));
  }

  addToCart() {
    const { location: { state: { product } } } = this.props;
    const { cartItems } = this.state;
    if (cartItems.some((item) => item.id === product.id)) {
      cartItems.find((item) => item.id === product.id).quantity += 1;
      this.setState({ cartItems });
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, {
          quantity: 1,
          id: product.id,
          product: [product],
        }],
      }));
    }
    this.cartHandleCounter();
  }

  loadCart() {
    const getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    if (getCartItems) {
      this.setState({ cartItems: getCartItems });
      const quantity = getCartItems.map((cartItem) => cartItem.quantity)
        .reduce((currentValue, nextValue) => currentValue + nextValue);
      this.setState({
        totalCartItems: quantity,
        cartItems: [...getCartItems],
      });
    }
  }

  saveCart() {
    const { cartItems } = this.state;
    sessionStorage.clear();
    sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;
    const CORRECT_SIZE = -5;

    let formatPrice = String(parseFloat((price * 100) / 100).toFixed(2));
    formatPrice = formatPrice.replace(/\./g, ',');

    return (
      <div className="details-container">
        <DetailsHeader title={ title } price={ formatPrice } />
        <div className="details-content">
          <div className="details-image-container">
            <img
              src={ `${String(thumbnail).slice(0, CORRECT_SIZE)}O.jpg` }
              className="details-image"
              alt="Imagem do Produto"
            />
          </div>
          <TechSpecs attributes={ attributes } />
          <button
            type="button"
            className="material-icons add-cart"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.addToCart() }
          >
            add_shopping_cart
          </button>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        attributes: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          value_name: PropTypes.string,
        })),
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
