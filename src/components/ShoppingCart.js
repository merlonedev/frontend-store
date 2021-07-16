import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tracker: false,
    };
    this.decreaseQtt = this.decreaseQtt.bind(this);
    this.increaseQtt = this.increaseQtt.bind(this);
  }

  // Função para decrementar a quntidade
  decreaseQtt(id) {
    const allProducts = JSON.parse(localStorage.getItem('item'));
    const { tracker } = this.state;
    const value = allProducts.find((item) => item.id === id);
    value.quantity -= 1;
    if (value.quantity === 0) {
      const indexToRemove = allProducts.indexOf(value);
      allProducts.splice(indexToRemove, 1);
    }
    const productUpdate = JSON.stringify(allProducts);
    localStorage.setItem('item', productUpdate);
    let itemCount = parseInt(localStorage.getItem('count'), 10);
    itemCount -= 1;
    localStorage.setItem('count', itemCount);
    this.setState({
      tracker: !tracker,
    });
  }

  // Função para incrementar a quantidade.
  increaseQtt(id) {
    const allProducts = JSON.parse(localStorage.getItem('item'));
    const { tracker } = this.state;
    const value = allProducts.find((item) => item.id === id);
    let itemCount = parseInt(localStorage.getItem('count'), 10);
    if (value.quantity < value.available_quantity) {
      value.quantity += 1;
      itemCount += 1;
    }
    const productUpdate = JSON.stringify(allProducts);
    localStorage.setItem('item', productUpdate);
    localStorage.setItem('count', itemCount);
    this.setState({
      tracker: !tracker,
    });
  }

  render() {
    const allProducts = JSON.parse(localStorage.getItem('item'));
    let renderConditional;
    if (!allProducts) {
      renderConditional = false;
    } else if (allProducts.length > 0) {
      renderConditional = true;
    } else {
      renderConditional = false;
    }
    return (
      <main>
        <div>
          {renderConditional ? (allProducts.map(({ title, id, thumbnail, quantity }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{title}</h3>
              <img src={ thumbnail } alt="Imagem do produto" />
              {/* Adicionando o botão de decrementação */}
              <button
                type="button"
                onClick={ () => this.decreaseQtt(id) }
                data-testid="product-decrease-quantity"
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{quantity}</p>
              {/* Adicionando o botão de incrementação */}
              <button
                type="button"
                value={ id }
                onClick={ () => this.increaseQtt(id) }
                data-testid="product-increase-quantity"
              >
                +
              </button>
            </div>
          ))) : (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          )}
        </div>
        <div>
          <Link
            to="/Checkout"
            data-testid="checkout-products"
          >
            Finalizar Compra
          </Link>
        </div>
      </main>
    );
  }
}
export default ShoppingCart;
// Neste componente está sendo retornado um H1 com o texto informado.
ShoppingCart.propTypes = {
  itemCart: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
  })),
}.isRequired;
