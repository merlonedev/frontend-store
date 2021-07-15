import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.renderCartDetail = this.renderCartDetail.bind(this);
    this.addToCart = this.addToCart.bind(this);
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

  addToCart(product) {
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
    if (cartItems) {
      sessionStorage.clear();
      sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }

  renderCartDetail() {
    const { cartItems } = this.state;
    return (
      <ul className="cart-list">
        { cartItems.map((item, index) => (
          <li className="cart-item" key={ index }>
            <span className="item-title" data-testid="shopping-cart-product-name">
              { item.product[0].title }
            </span>
            <span className="item-quantity" data-testid="shopping-cart-product-quantity">
              { item.quantity }
            </span>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { totalCartItems } = this.state;
    return (
      <div className="cart-container">
        <nav className="cart-nav">
          <Link className="material-icons previous" to="/"> arrow_back </Link>
          <div className="cart-nav-title">
            <span className="material-icons cart cart-icon"> shopping_cart </span>
            <h2 className="cart-title">Carrinho de Compras</h2>
          </div>
        </nav>
        <div className="cart-main">
          {((totalCartItems > 0) ? (
            this.renderCartDetail()
          ) : (
            <div className="cart-empty">
              <span className="material-icons empty-bag"> shopping_bag </span>
              <h1 className="cart-empty-title" data-testid="shopping-cart-empty-message">
                Seu carrinho está vazio
              </h1>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Cart;
