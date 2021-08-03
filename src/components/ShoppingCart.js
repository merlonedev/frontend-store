import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.getProductQuantity = this.getProductQuantity.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  getProductQuantity(productId) {
    const { shoppingCartProductList } = this.props;
    const product = shoppingCartProductList
      .find((cartProduct) => cartProduct.id === productId);
    return product.quantity;
  }

  isEmpty() {
    const { shoppingCartProductList } = this.props;
    return (shoppingCartProductList.length === 0);
  }

  render() {
    const {
      goBackCallBack,
      updateQuantityCallBack,
      shoppingCartProductList,
      renderCheckoutCallBack,
    } = this.props;

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
        <h1>Shopping Cart</h1>
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
                  onClick={ (e) => updateQuantityCallBack(e.target, '+') }
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
                  onClick={ (e) => updateQuantityCallBack(e.target, '-') }
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
          data-testid="checkout-products"
          onClick={ () => renderCheckoutCallBack() }
        >
          CHECKOUT
        </button>
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
  updateQuantityCallBack: PropTypes.func.isRequired,
  renderCheckoutCallBack: PropTypes.func.isRequired,
};

export default ShoppingCart;
