import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
      totalQuantity: 0,
      totalPrice: 0,
    };

    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleTotalPrice = this.handleTotalPrice.bind(this);
    this.handleRepeatProduct = this.handleRepeatProduct.bind(this);
    this.handleFirstProduct = this.handleFirstProduct.bind(this);
    this.handleRemovedProduct = this.handleRemovedProduct.bind(this);
    this.handleShoppingCart = this.handleShoppingCart.bind(this);
  }

  componentDidMount() {
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    const totalQuantity = +localStorage.getItem('totalQuantity');
    const totalPrice = +localStorage.getItem('totalPrice');
    if (cartProducts || totalQuantity || totalPrice) {
      this.handlePersistState(cartProducts, totalQuantity, totalPrice);
    }
  }

  componentDidUpdate() {
    const { cartProducts, totalQuantity, totalPrice } = this.state;
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
    localStorage.setItem('totalQuantity', totalQuantity);
    localStorage.setItem('totalPrice', totalPrice);
  }

  handlePersistState(cartProducts, totalQuantity, totalPrice) {
    this.setState((prevState) => ({
      ...prevState,
      cartProducts,
      totalQuantity,
      totalPrice,
    }));
  }

  handleQuantity() {
    this.setState((prevState) => {
      const { cartProducts } = prevState;
      const totalQuantity = cartProducts
        .reduce((acc, { qtdInCart }) => (acc + qtdInCart), 0);

      return ({
        ...prevState,
        totalQuantity,
      });
    });
  }

  handleTotalPrice() {
    this.setState((prevState) => {
      const { cartProducts } = prevState;
      const totalPrice = cartProducts
        .reduce((acc, { price, qtdInCart }) => (acc + (price * qtdInCart)), 0);

      return ({
        ...prevState,
        totalPrice,
      });
    });
  }

  handleRepeatProduct(products, product, qtd) {
    const findRepeatProduct = products.find(({ id }) => id === product.id);
    const { qtdInCart, available_quantity: availableQuantity } = findRepeatProduct;
    if (qtdInCart >= availableQuantity && qtd > 0) {
      findRepeatProduct.qtdInCart = availableQuantity;
    } else {
      findRepeatProduct.qtdInCart += (qtdInCart === 1 && qtd < 0) ? 0 : qtd;
    }
    const updatedCartList = products
      .reduce((acc, curr) => (
        (curr.id === findRepeatProduct.id) ? [...acc, findRepeatProduct] : [...acc, curr]
      ), []);

    this.setState((prevState) => ({
      ...prevState,
      cartProducts: [
        ...updatedCartList,
      ],
    }),
    () => {
      this.handleQuantity();
      this.handleTotalPrice();
    });
  }

  handleFirstProduct(products, product) {
    this.setState((prevState) => ({
      ...prevState,
      cartProducts: [
        ...products,
        {
          ...product,
          qtdInCart: 1,
        },
      ],
    }),
    () => {
      this.handleQuantity();
      this.handleTotalPrice();
    });
  }

  handleRemovedProduct(products) {
    this.setState((prevState) => ({
      ...prevState,
      cartProducts: [...products],
    }),
    () => {
      this.handleQuantity();
      this.handleTotalPrice();
    });
  }

  handleShoppingCart(products, product, qtd = 1) {
    if (!product) {
      this.handleRemovedProduct(products);
      return;
    }
    const repeatProduct = products.some(({ id }) => id === product.id);
    if (repeatProduct) {
      this.handleRepeatProduct(products, product, qtd);
    } else {
      this.handleFirstProduct(products, product);
    }
  }

  render() {
    const { cartProducts, totalQuantity, totalPrice } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (
              <Home
                { ...props }
                cartProducts={ cartProducts }
                totalQuantity={ totalQuantity }
                handleShoppingCart={ this.handleShoppingCart }
              />
            ) }
          />
          <Route
            exact
            path="/CartPage"
            render={ (props) => (
              <CartPage
                { ...props }
                cartProducts={ cartProducts }
                totalPrice={ totalPrice }
                handleShoppingCart={ this.handleShoppingCart }
              />
            ) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (
              <ProductDetail
                { ...props }
                cartProducts={ cartProducts }
                totalQuantity={ totalQuantity }
                handleShoppingCart={ this.handleShoppingCart }
              />
            ) }
          />
          <Route exact path="/Checkout" component={ Checkout } />
        </Switch>
      </Router>
    );
  }
}

export default App;
