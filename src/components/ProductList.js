import React, { Component } from 'react';
// import update from 'immutability-helper';
import SearchBar from './SearchBar';
import ProductCard from './ProductCard';
import * as API from '../services/api';
import Category from './Category';
import ProductDetails from './ProductDetails';
import ShoppingCart from './ShoppingCart';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      shoppingCartProductList: [],
      query: '',
      renderDetailsProductId: '',
      renderDetails: false,
      renderShoppingCart: false,
    };
    this.getProductList = this.getProductList.bind(this);
    this.getCategoryList = this.getCategoryList.bind(this);
    this.getQuery = this.getQuery.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  async getProductList(categoryid, query) {
    const productList = await API.getProductsFromCategoryAndQuery(categoryid, query);
    this.setState({
      productList: productList.results,
    });
  }

  getCategoryList(categoryid) {
    const { query } = this.state;
    this.getProductList(categoryid, query);
  }

  getQuery(query) {
    this.setState({
      query,
    });
    this.getProductList(undefined, query);
  }

  addToCart(product) {
    // const checkoutNewProduct = (checkoutProduct) => {
    //   console.log('novo');
    //   return (
    //     {
    //       id: checkoutProduct.id,
    //       price: checkoutProduct.price,
    //       quantity: 1,
    //       product: checkoutProduct,
    //     }
    //   );
    // };

    // const updateCheckoutProduct = (productToBeUpdated) => {
    //   console.log('repetido');
    //   return (
    //     {
    //       id: checkoutProduct.id,
    //       price: checkoutProduct.price,
    //       quantity: shoppingCartProductList,
    //       product: checkoutProduct,
    //     }
    //   );
    // };
    // console.log('addToCart');
    // const { shoppingCartProductList } = this.state;
    // this.setState((prev) => ({
    //   shoppingCartProductList: [...prev.shoppingCartProductList, shoppingCartProductList.some((prod) => prod.id === product.id)
    //     ? updateCheckoutProduct(product)// update()
    //     : checkoutNewProduct(product)],
    
      this.setState((prev) => ({
        shoppingCartProductList: [...prev.shoppingCartProductList, product],
    }));
  }

  findProduct(productList, renderDetailsProductId) {
    return productList.find((product) => product.id === renderDetailsProductId);
  }

  renderDetails(renderDetailsProductId) {
    const { productList } = this.state;
    const toggledProduct = this.findProduct(productList, renderDetailsProductId);
    this.setState({
      renderDetailsProductId: toggledProduct,
      renderDetails: true,
    });
  }

  render() {
    const {
      productList,
      renderDetails,
      renderDetailsProductId,
      shoppingCartProductList,
      renderShoppingCart,
    } = this.state;
    if (renderShoppingCart) {
      return (
        <ShoppingCart
          products={ shoppingCartProductList }
          renderShoppingCartCallBack={ () => this.setState({
            renderShoppingCart: false,
          }) }
        />
      );
    }
    if (renderDetails) {
      return (<ProductDetails
        product={ renderDetailsProductId }
        goBackCallBack={ () => this.setState({
          renderDetails: false,
        }) }
      />);
    }
    return (
      <>
        <SearchBar
          getQueryCallBack={ this.getQuery }
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
        <Category
          getCategoryListCallBack={ this.getCategoryList }
        />
        {productList
          .map((product) => (
            <ProductCard
              key={ product.id }
              product={ product }
              renderDetailsCallBack={ this.renderDetails }
              addToCartCallback={ this.addToCart }
            />))}
      </>
    );
  }
}

export default ProductList;
