import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1,
    };
    this.decreaseQtt = this.decreaseQtt.bind(this);
    this.increaseQtt = this.increaseQtt.bind(this);
  }

  // Função para decrementar a quntidade
  decreaseQtt() {
    const { itemCart } = this.props;
    this.setState({
      size: itemCart.length -= 1,
    });
  }

  // Função para incrementar a quantidade
  increaseQtt(event) {
    const { itemCart } = this.props;
    console.log(itemCart);
    console.log(event.target);
    this.setState({
      size: itemCart.length += 1,
    });
  }

  render() {
    const { size } = this.state;
    const { itemCart } = this.props;
    return (
      <div>
        {itemCart.length ? (itemCart.map(({ title, id, thumbnail }) => (
          <div key={ id }>
            <h3 data-testid="shopping-cart-product-name">{title}</h3>
            <img src={ thumbnail } alt="Imagem do produto" />
            {/* Adicionando o botão de decrementação */}
            <button
              type="button"
              onClick={ this.decreaseQtt }
              data-testid="product-decrease-quantity"
            >
              -
            </button>
            <p data-testid="shopping-cart-product-quantity">{size}</p>
            {/* Adicionando o botão de incrementação */}
            <button
              type="button"
              value={ id }
              onClick={ this.increaseQtt }
              data-testid="product-increase-quantity"
            >
              +
            </button>
          </div>
        ))) : (
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        )}
      </div>
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
