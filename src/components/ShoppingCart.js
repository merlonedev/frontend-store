import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsCount: {},
    };
    this.getProductsCount = this.getProductsCount.bind(this);
    this.resetProductsCount = this.resetProductsCount.bind(this);
    this.getProductCount = this.getProductCount.bind(this);
    this.isEmpty = this.isEmpty.bind(this);
  }

  componentDidMount() {
    this.resetProductsCount();
    this.getProductsCount();
  }

  getProductsCount() {
    const { shoppingCartList } = this.props;
    const productsCount = shoppingCartList
      .reduce((acc, curr) => {
        (acc[curr.id] = acc[curr.id] || []).push(curr);
        return acc;
      }, {});
    this.setState({
      productsCount,
    });
  }

  getProductCount(productId) {
    const { productsCount } = this.state;
    const itemCount = productsCount[productId].length;
    return itemCount;
  }

  resetProductsCount() {
    this.setState({
      productsCount: {},
    });
  }

  isEmpty() {
    const { productsCount } = this.state;
    return (Object.keys(productsCount).length === 0);
  }

  render() {
    const { shoppingCartList, goBackCallBack } = this.props;
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
        {shoppingCartList
          .map((product) => {
            const productCount = this.getProductCount(product.id);
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
                <h3
                  data-testid="shopping-cart-product-quantity"
                >
                  Quantity:
                  {productCount}
                </h3>
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
  shoppingCartList: PropTypes.arrayOf(PropTypes.object).isRequired,
  goBackCallBack: PropTypes.func.isRequired,
};

export default ShoppingCart;
