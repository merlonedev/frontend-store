import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingCartProductList: [],
    };
    this.getShoppingCartProductList = this.getShoppingCartProductList.bind(this);
    this.getProductQuantity = this.getProductQuantity.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
    this.updateQuantity = this.updateQuantity.bind(this);
  }

  componentDidMount() {
    this.getShoppingCartProductList();
  }

  getShoppingCartProductList() {
    const { shoppingCartProductList } = this.props;
    this.setState({
      shoppingCartProductList,
    });
  }

  getProductQuantity(productId) {
    const { shoppingCartProductList } = this.state;
    const product = shoppingCartProductList
      .find((cartProduct) => cartProduct.id === productId);
    return product.quantity;
  }

  getIndexById(id, array) { return array.map((elem) => elem.id).indexOf(id); }

  updateQuantity(target, operation) {
    const { shoppingCartUpdaterCallback } = this.props;
    const { shoppingCartProductList } = this.state;
    const productId = target.getAttribute('productid');
    const tempState = [...shoppingCartProductList];
    const index = this.getIndexById(productId, tempState);
    const tempElement = { ...tempState[index] };
    if (operation === '+') tempElement.quantity += 1;
    if (operation === '-') tempElement.quantity -= 1;
    if (tempElement.quantity < 0) {
      tempElement.quantity = 0;
    }
    tempState[index] = tempElement;
    shoppingCartUpdaterCallback(shoppingCartProductList);
    this.setState({
      shoppingCartProductList: tempState,
    });
  }

  isEmpty() {
    const { shoppingCartProductList } = this.state;
    return (shoppingCartProductList.length === 0);
  }

  render() {
    const { goBackCallBack } = this.props;
    const { shoppingCartProductList } = this.state;
    if (this.isEmpty()) {
      return (
        <div>
          <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          <button
            type="button"
            onClick={ () => goBackCallBack() }
          >
            Voltar
          </button>
        </div>
      );
    }
    return (
      <div data-testid="product">
        <h1>shopping cart</h1>
        {shoppingCartProductList
          .map(({ product }) => {
            const productQuantity = this.getProductQuantity(product.id);
            return (
              <section
                key={ product.id }
              >
                <h4
                  data-testid="shopping-cart-product-name"
                >
                  {product.title}
                </h4>
                <h4>{product.price}</h4>
                <img src={ product.thumbnail } alt={ product.title } />
                <button
                  type="button"
                  onClick={ (e) => this.updateQuantity(e.target, '+') }
                  productid={ product.id }
                  data-testid="product-increase-quantity"
                >
                  +
                </button>
                <h3
                  data-testid="shopping-cart-product-quantity"
                >
                  Quantity:
                  {productQuantity}
                </h3>
                <button
                  type="button"
                  onClick={ (e) => this.updateQuantity(e.target, '-') }
                  productid={ product.id }
                  data-testid="product-decrease-quantity"
                >
                  -
                </button>
                <h2>
                  Endereço do Vendedor:
                </h2>
                <h3>
                  {product.seller_address.city.name}
                  <span>
                    {product.seller_address.state.name}
                    {product.seller_address.country.name}
                  </span>
                </h3>
              </section>
            );
          })}
        <button
          type="button"
          onClick={ () => goBackCallBack() }
        >
          Voltar
        </button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  shoppingCartProductList: PropTypes.arrayOf(PropTypes.object).isRequired,
  goBackCallBack: PropTypes.func.isRequired,
  shoppingCartUpdaterCallback: PropTypes.func.isRequired,
};

export default ShoppingCart;
