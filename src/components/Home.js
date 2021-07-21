import React, { Component } from 'react';
import * as API from '../services/api';

import SearchBar from './SearchBar';
import Categories from './Categories';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import ProductList from './ProductList';
import Checkout from './Checkout';
import ShoppingCartButton from './ShoppingCartButton';
import SortProductList from './SortProductList';

class Home extends Component { // aqui última  diferenças para componente funcional
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartProductList: [],
      productList: [],
      query: '',
      renderDetailsFor: {},
      renderDetails: false,
      renderShoppingCart: false,
      renderCheckout: false,
    };
    this.getProductList = this.getProductList.bind(this);
    this.getProductListByCategory = this.getProductListByCategory.bind(this);
    this.getProductListByQuery = this.getProductListByQuery.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.addNewProductToCart = this.addNewProductToCart.bind(this);
    this.updateCartProduct = this.updateCartProduct.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.renderShoppingCart = this.renderShoppingCart.bind(this);
    this.renderCheckoutCallBack = this.renderCheckoutCallBack.bind(this);
    this.goBackCallBack = this.goBackCallBack.bind(this);
    this.loadShoppingCart = this.loadShoppingCart.bind(this);
    this.sortProductList = this.sortProductList.bind(this);
  }

  componentDidMount() {
    this.loadShoppingCart();
  }

  async getProductList(categoryid, query) {
    const productList = await API.getProductsFromCategoryAndQuery(categoryid, query);
    this.setState({
      productList: productList.results,
    });
  }

  getProductListByCategory(categoryid) {
    const { query } = this.state;
    this.getProductList(categoryid, query);
  }

  getProductListByQuery(query) {
    this.setState({
      query,
    });
    this.getProductList(undefined, query);
  }

  getIndexById(id, array) { return array.map((elem) => elem.id).indexOf(id); }

  loadShoppingCart() {
    const storage = JSON.parse(localStorage
      .getItem('shoppingCartProductList'));
    if (storage) {
      this.setState({
        shoppingCartProductList: storage,
      });
    }
  }

  addNewProductToCart(newCartProduct) {
    return ({
      id: newCartProduct.id,
      quantity: 1,
      price: newCartProduct.price,
      product: newCartProduct,
    });
  }

  updateCartProduct(productToBeUpdated, operation) { // aqui sugestão de refatoração?
    const { shoppingCartProductList } = this.state;
    const tempState = [...shoppingCartProductList];
    const productId = (productToBeUpdated.site_id === 'MLB'
      ? productToBeUpdated.id
      : productToBeUpdated.getAttribute('productid'));
    const index = this.getIndexById(productId, tempState);
    const tempElement = { ...tempState[index] };
    if (operation === '+') tempElement.quantity += 1;
    if (tempElement.quantity > tempElement.product.available_quantity) {
      tempElement.quantity = tempElement.product.available_quantity;
    }
    if (operation === '-') tempElement.quantity -= 1;
    if (tempElement.quantity <= 0) tempElement.quantity = 1;
    tempState[index] = tempElement;
    this.setState({
      shoppingCartProductList: tempState,
    });
    localStorage.setItem('shoppingCartProductList', JSON.stringify([...tempState]));
  }

  addToCart(product) {
    const { shoppingCartProductList } = this.state;
    if (shoppingCartProductList.some((prod) => prod.id === product.id)) {
      this.updateCartProduct(product, '+');
    } else {
      this.setState((prev) => { // aqui existe outra forma de fazer?
        const stateValue = [...prev.shoppingCartProductList,
          this.addNewProductToCart(product)];
        localStorage.setItem('shoppingCartProductList', JSON.stringify(stateValue));
        const stateUpdate = { shoppingCartProductList: stateValue };
        return stateUpdate;
      });
    }
  }

  goBackCallBack() {
    this.setState({
      renderShoppingCart: false,
      renderDetails: false,
      renderCheckout: false,
    });
  }

  sortProductList() {
    return null;
  }

  renderDetails(product) {
    this.setState({
      renderDetailsFor: product,
      renderDetails: true,
    });
  }

  renderShoppingCart() {
    this.setState({
      renderShoppingCart: true,
    });
  }

  renderCheckoutCallBack() {
    this.setState({
      renderShoppingCart: false,
      renderDetails: false,
      renderCheckout: true,
    });
  }

  render() {
    const {
      productList,
      renderDetails,
      renderDetailsFor,
      shoppingCartProductList,
      renderShoppingCart,
      renderCheckout,
    } = this.state;

    if (renderShoppingCart) { // aqui vantagens da navegação por Route
      return (
        <ShoppingCart
          shoppingCartProductList={ shoppingCartProductList }
          goBackCallBack={ this.goBackCallBack }
          updateQuantityCallBack={
            (productToBeUpdated, operation) => this
              .updateCartProduct(productToBeUpdated, operation)
          }
          renderCheckoutCallBack={ this.renderCheckoutCallBack }
        />
      );
    }
    if (renderCheckout) {
      return (
        <Checkout
          shoppingCartProductList={ shoppingCartProductList }
          goBackCallBack={ this.goBackCallBack }
        />
      );
    }
    if (renderDetails) {
      return (
        <>
          <ShoppingCartButton
            shoppingCartProductList={ shoppingCartProductList }
            onClick={ this.renderShoppingCart }
            dataTestId="shopping-cart-button"
          />
          <ProductDetails
            product={ renderDetailsFor }
            renderShoppingCartCallBack={ this.renderShoppingCart }
            goBackCallBack={ this.goBackCallBack }
            addToCartCallback={ this.addToCart }
          />
        </>);
    }
    return (
      <>
        <button
          type="button"
          onClick={ this.loadShoppingCart }
        >
          LOAD
        </button>
        <ShoppingCartButton
          shoppingCartProductList={ shoppingCartProductList }
          onClick={ this.renderShoppingCart }
          dataTestId="shopping-cart-button"
        />
        <SearchBar
          getProductListByQueryCallBack={ this.getProductListByQuery }
        />
        <Categories
          getProductListByCategoryCallBack={ this.getProductListByCategory }
        />
        <SortProductList
          sortProductListCallBack={ this.sortProductList }
        />
        <ProductList
          productList={ productList }
          renderDetailsCallBack={ (product) => this.renderDetails(product) }
          addToCartCallback={ this.addToCart }
        />
      </>
    );
  }
}

export default Home;
