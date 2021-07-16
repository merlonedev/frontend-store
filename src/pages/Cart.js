import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.renderCartDetail = this.renderCartDetail.bind(this);
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

  loadCart() {
    const getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
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

  increase(item) {
    if (item.product[0].available_quantity === item.quantity) return;
    item.quantity += 1;

    const { cartItems } = this.state;

    const index = cartItems.findIndex(({ id }) => id === item.id);
    cartItems[index] = item;
    this.setState({ cartItems });

    const getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    getCartItems[index] = item;
    this.saveCart();
  }

  decrease(item) {
    if (item.quantity === 1) return;
    item.quantity -= 1;

    const { cartItems } = this.state;

    const index = cartItems.findIndex(({ id }) => id === item.id);
    cartItems[index] = item;
    this.setState({ cartItems });

    const getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    getCartItems[index] = item;
    this.saveCart();
  }

  remove(item) {
    const { cartItems } = this.state;

    const index = cartItems.findIndex(({ id }) => id === item.id);
    cartItems.splice(index, 1);
    this.setState({ cartItems });

    const getCartItems = JSON.parse(sessionStorage.getItem('cartItems'));
    getCartItems.splice(index, 1);
    this.saveCart();
  }

  renderCartDetail() {
    const { cartItems } = this.state;
    let valorTotal = 0;
    cartItems.forEach((item) => { valorTotal += item.product[0].price * item.quantity; });

    return (
      <div>
        <ul className="cart-list">
          {cartItems.map((item, index) => (
            <li className="cart-item" key={ index }>
              <button
                className="cart-button"
                type="button"
                onClick={ () => this.remove(item) }
              >
                X
              </button>
              <img
                className="cart-product-image"
                src={ item.product[0].thumbnail }
                alt={ `${item.product[0].title} sprite` }
              />
              <p className="cart-item-title" data-testid="shopping-cart-product-name">
                {item.product[0].title}
              </p>
              <button
                className="cart-button"
                data-testid="product-decrease-quantity"
                type="button"
                onClick={ () => this.decrease(item) }
              >
                -
              </button>
              <p
                className="cart-item-quantity"
                data-testid="shopping-cart-product-quantity"
              >
                {item.quantity}
              </p>
              <button
                className="cart-button"
                data-testid="product-increase-quantity"
                type="button"
                onClick={ () => this.increase(item) }
              >
                +
              </button>
              <span
                className="cart-item-price"
              >
                {`R$ ${(item.product[0].price).toFixed(2)}`}
              </span>
            </li>
          ))}
        </ul>
        <h2
          className="cart-total-price"
        >
          {`Valor Total da Compra: R$ ${valorTotal.toFixed(2)}`}
        </h2>
      </div>
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
