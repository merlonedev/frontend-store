import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ShoppingCart from './components/ShoppingCart';
import CategoriesBar from './components/CategoriesBar';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails';
// import Quantities from './components/Quantities';
import Checkout from './components/Checkout';
import Header from './components/Header';
import * as API from './services/api';
import './App.css';

// prettier-ignore
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      categories: [],
      queryInput: '',
      category: '',
      cartItems: [],
      quantity: 0,
    };
    this.setProducts = this.setProducts.bind(this);
    this.callback = this.callback.bind(this);
    this.callbackCategory = this.callbackCategory.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.increaseQty = this.increaseQty.bind(this);
    this.decreaseQty = this.decreaseQty.bind(this);
    this.loadQuantity = this.loadQuantity.bind(this);
    this.loadCart = this.loadCart.bind(this);
  }

  componentDidMount() {
    API.getCategories().then((results) => {
      this.setState({
        categories: results,
      });
    });
    this.loadQuantity();
    this.loadCart();
  }

  // prettier-ignore
  async setProducts() {
    const { queryInput, category } = this.state;
    const results = await API.getProductsFromCategoryAndQuery(
      category,
      queryInput,
    );
    this.setState({
      products: results.results,
    });
  }

  loadQuantity() {
    if (!localStorage.quantity) return;
    const quantity = JSON.parse(localStorage.quantity);
    this.setState({ quantity });
  }

  loadCart() {
    if (!localStorage.cartItems) return;
    const cartItems = JSON.parse(localStorage.cartItems);
    console.log(cartItems);
    this.setState({ cartItems });
  }

  callback(input) {
    this.setState({ queryInput: input }, () => this.setProducts());
  }

  removeItem(itemId, qty) {
    const { cartItems } = this.state;
    let { quantity } = this.state;
    quantity -= qty;
    this.setState({
      cartItems: cartItems.filter(({ id }) => id !== itemId),
      quantity,
    });
  }

  increaseQty(itemId) {
    const { cartItems } = this.state;
    let { quantity } = this.state;
    quantity += 1;
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    const nextQuantity = cartItems[itemIndex].qty;
    if ((nextQuantity + 1) > cartItems[itemIndex].available_quantity) return;

    this.setState({
      cartItems: [
        ...cartItems.slice(0, itemIndex),
        { ...cartItems[itemIndex], qty: cartItems[itemIndex].qty + 1 },
        ...cartItems.slice(itemIndex + 1),
      ],
      quantity,
    });
  }

  decreaseQty(itemId) {
    const { cartItems } = this.state;
    let { quantity } = this.state;
    quantity -= 1;
    const itemIndex = cartItems.findIndex(({ id }) => id === itemId);
    if (cartItems[itemIndex].qty < 1) return;
    this.setState({
      cartItems: [
        ...cartItems.slice(0, itemIndex),
        { ...cartItems[itemIndex], qty: cartItems[itemIndex].qty - 1 },
        ...cartItems.slice(itemIndex + 1),
      ],
      quantity,
    });
  }

  addToCart(itemObj) {
    const { cartItems } = this.state;
    let { quantity } = this.state;
    quantity += 1;
    const items = [...cartItems];
    const currItem = Object.values(cartItems)
      .find((item) => item.id === itemObj.id);

    if (!currItem) items.push(itemObj);
    else currItem.qty += 1;

    this.setState({
      cartItems: items,
      quantity,
    }, this.handleLocalStorage);
  }

  callbackCategory({ target }) {
    this.setState({ category: target.value }, () => this.setProducts());
  }

  render() {
    const { categories, products, cartItems, quantity } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Header quantity={ quantity } callback={ this.callback } />
          <div className="body">
            <Switch>
              <Route
                exact
                path="/productdetails/:id"
                render={ (props) => (
                  <ProductDetails
                    { ...props }
                    quantity={ quantity }
                    callback={ this.addToCart }
                  />
                ) }
              />
              <Route
                exact
                path="/cart"
                render={ () => (
                  <ShoppingCart
                    cartItems={ cartItems }
                    updateAppCart={ this.updateCartItems }
                    handlers={ {
                      remove: this.removeItem,
                      increase: this.increaseQty,
                      decrease: this.decreaseQty,
                    } }
                  />
                ) }
              />
              <Route
                exact
                path="/"
                render={ () => (
                  <div className="home">
                    <SearchBar quantity={ quantity } callback={ this.callback } />
                    {/* <button type="button">
                      <Link to="/cart" data-testid="shopping-cart-button">
                        Carrinho
                      </Link>
                      <Quantities quantity={ quantity } />
                    </button> */}
                    <CategoriesBar
                      categories={ categories }
                      callback={ this.callbackCategory }
                    />
                    <ProductsList products={ products } callback={ this.addToCart } />
                  </div>
                ) }
              />
              <Route
                exact
                path="/checkout"
                render={ () => (
                  <Checkout
                    handlers={ {
                      remove: this.removeItem,
                      increase: this.increaseQty,
                      decrease: this.decreaseQty,
                    } }
                    cartItems={ cartItems }
                    showButtons="false"
                  />) }
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
