import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '../Components/ShoppingCartIcon';

class ShoppingCart extends React.Component {
  render() {
    const { products, increaseQuantity, decreaseQuantity, removeThisItem } = this.props;
    const total = products.reduce((acc, cur) => acc + cur.price * cur.quantityInCart, 0);
    return (
      <div>
        <header className="row">
          <ShoppingCartIcon />
          <h2>Carrinho de compras</h2>
        </header>
        <main>

          <div>

            {
              products.length === 0
            && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            }
            {
              products.map((item) => {
                const { id, title, thumbnail, quantityInCart, price } = item;
                return (
                  <div key={ id } className="row">
                    <button
                      type="button"
                      className="remove-item"
                      onClick={ () => removeThisItem(item) }
                    >
                      x
                    </button>
                    <img src={ thumbnail } alt={ title } className="thumb-size" />
                    <h3 data-testid="shopping-cart-product-name">{title}</h3>
                    <button
                      type="button"
                      data-testid="product-decrease-quantity"
                      onClick={ () => decreaseQuantity(item) }
                      className="remove"
                    >
                      -
                    </button>
                    <button
                      type="button"
                      data-testid="shopping-cart-product-quantity"
                      className="badge"
                    >
                      {quantityInCart}
                    </button>
                    <button
                      type="button"
                      data-testid="product-increase-quantity"
                      onClick={ () => increaseQuantity(item) }
                      className="add"
                    >
                      +
                    </button>
                    <p>
                      R$
                      { quantityInCart * price.toFixed(2) }
                    </p>
                  </div>
                );
              })
            }
            {
              products.length !== 0
              && <h4>{`Valor Total da Compra: R$${total.toFixed(2)}`}</h4>
            }

            {
              products.length !== 0 && <button type="button">Finalizar Compra</button>
            }
          </div>
        </main>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantityInCart: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeThisItem: PropTypes.func.isRequired,
};

export default ShoppingCart;
