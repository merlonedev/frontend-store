import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    const getElementCart = JSON.parse(sessionStorage.getItem('addCart'));
    const emptyMessage = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    return (
      getElementCart === null
        ? emptyMessage
        : (
          <ul>
            { getElementCart.map((product) => (
              <li key={ product.id }>
                <p data-testid="shopping-cart-product-name">
                  { product.title }
                </p>
                <p>
                  { `R$ ${product.price}` }
                </p>
                <p data-testid="shopping-cart-product-quantity">
                  { getElementCart.length}
                </p>
              </li>)) }
          </ul>)
    );
  }
}

export default ShoppingCart;
