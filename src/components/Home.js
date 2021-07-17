import React, { Component } from 'react';
import * as API from '../services/api';

import SearchBar from './SearchBar';
import Categories from './Categories';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';
import ProductList from './ProductList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      shoppingCartProductList: [],
      query: '',
      renderDetailsFor: {},
      renderDetails: false,
      renderShoppingCart: false,
    };
    this.getProductList = this.getProductList.bind(this);
    this.getProductListByCategory = this.getProductListByCategory.bind(this);
    this.getProductListByQuery = this.getProductListByQuery.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.updateCheckoutProduct = this.updateCheckoutProduct.bind(this);
    this.checkoutNewProduct = this.checkoutNewProduct.bind(this);
  }

  componentDidMount() {
    this.getProductList(undefined, 'motos');
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

  checkoutNewProduct(newCheckoutProduct) {
    return ({
      id: newCheckoutProduct.id,
      quantity: 1,
      price: newCheckoutProduct.price,
      product: newCheckoutProduct,
    });
  }

  updateCheckoutProduct(productToBeUpdated, operation) {
    const { shoppingCartProductList } = this.state;
    const tempState = [...shoppingCartProductList];
    const index = this.getIndexById(productToBeUpdated.id, tempState);
    const tempElement = { ...tempState[index] };
    if (operation === '+') tempElement.quantity += 1;
    if (operation === '-') tempElement.quantity -= 1;
    if (tempElement.quantity < 0) {
      tempElement.quantity = 0;
    }
    tempState[index] = tempElement;
    this.setState({
      shoppingCartProductList: tempState,
    });
  }

  addToCart(product) {
    const { shoppingCartProductList } = this.state;
    if (shoppingCartProductList.some((prod) => prod.id === product.id)) {
      this.updateCheckoutProduct(product, '+');
    } else {
      this.setState((prev) => ({
        shoppingCartProductList: [
          ...prev.shoppingCartProductList, this.checkoutNewProduct(product)],
      }));
    }
  }

  findProduct(productList, renderDetailsProductId) {
    return productList.find((product) => product.id === renderDetailsProductId);
  }

  renderDetails(renderDetailsProductId) {
    const { productList } = this.state;
    const detailedProduct = this.findProduct(productList, renderDetailsProductId);
    this.setState({
      renderDetailsFor: detailedProduct,
      renderDetails: true,
    });
  }

  render() {
    const {
      productList,
      renderDetails,
      renderDetailsFor,
      shoppingCartProductList,
      renderShoppingCart,
    } = this.state;

    if (renderShoppingCart) {
      return (
        <ShoppingCart
          shoppingCartProductList={ shoppingCartProductList }
          shoppingCartUpdaterCallback={ (updatedShoppingCart) => this.setState({
            shoppingCartProductList: updatedShoppingCart,
          }) }
          goBackCallBack={ () => this.setState({
            renderShoppingCart: false,
            renderDetails: false,
          }) }
        />
      );
    }
    if (renderDetails) {
      return (<ProductDetails
        product={ renderDetailsFor }
        renderShoppingCartCallBack={ () => this.setState({
          renderShoppingCart: true,
          renderDetails: false,
        }) }
        goBackCallBack={ () => this.setState({
          renderDetails: false,
          renderShoppingCart: false,
        }) }
      />);
    }
    return (
      <>
        <SearchBar
          getProductListByQueryCallBack={ this.getProductListByQuery }
        />
        <button
          type="button"
          onClick={ () => {
            this.setState({
              renderShoppingCart: true,
            });
          } }
          data-testid="shopping-cart-button"
        >
          carrinho
        </button>
        <Categories
          getProductListByCategoryCallBack={ this.getProductListByCategory }
        />
        <ProductList
          productList={ productList }
          renderDetailsCallBack={ this.renderDetails }
          addToCartCallback={ this.addToCart }
        />
      </>
    );
  }
}

export default Home;
