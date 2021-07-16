import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DetailsHeader, TechSpecs } from '../components';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);

    this.state = {
      totalCartItems: 0,
      cartItems: [],
    };
  }

  componentDidMount() {
    this.loadCart();
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedCategory, searchSend, cartItems, totalCartItems } = this.state;
    if ((prevState.selectedCategory !== selectedCategory)
      || (prevState.searchSend !== searchSend)) {
      this.getProducts(selectedCategory, searchSend);
    }
    if ((prevState.cartItems !== cartItems)
      || (prevState.totalCartItems !== totalCartItems)) {
      this.saveCart();
    }
  }

  loadCart() {
    let getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    if (getCartItems === null) getCartItems = [];
    if (getCartItems.length > 0) {
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
    if (cartItems) {
      sessionStorage.clear();
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }

  addToCart(product) {
    const { cartItems } = this.state;
    const getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index >= 0) {
      if (cartItems[index].quantity === product.available_quantity) return;
      cartItems[index].quantity += 1;
      getCartItems[index].quantity += 1;
      this.setState({ cartItems });
      this.saveCart();
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, {
          quantity: 1,
          id: product.id,
          product: [product],
        }],
      }));
    }
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
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ () => this.addToCart(product) }
          >
            Adicionar ao Carrinho
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
