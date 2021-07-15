import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: '',
      tracker: false,
    };
    this.decreaseQtt = this.decreaseQtt.bind(this);
    this.increaseQtt = this.increaseQtt.bind(this);
    this.loadState = this.loadState.bind(this);
  }

  componentDidMount() {
    this.loadState();
  }

  loadState() {
    const { itemCart } = this.props;
    const { items } = this.state;
    const infos = itemCart.map((item) => {
      const obj = {
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        thumbnail: item.thumbnail,
        price: item.price,
      };
      return obj;
    });
    this.setState({
      items: [...items, infos],
    });
  }

  // Função para decrementar a quntidade
  decreaseQtt(id) {
    const { items, tracker } = this.state;
    const value = items[0].find((item) => item.id === id);
    value.quantity -= 1;
    if (value.quantity === 0) {
      const indexToRemove = items[0].indexOf(value);
      items[0].splice(indexToRemove, 1);
    }
    this.setState({
      tracker: !tracker,
    });
  }

  // Função para incrementar a quantidade
  increaseQtt(id) {
    const { items, tracker } = this.state;
    const value = items[0].find((item) => item.id === id);
    value.quantity += 1;
    this.setState({
      tracker: !tracker,
    });
  }

  render() {
    const { items } = this.state;
    const abc = localStorage.getItem('count');
    return (
      <div>
        {abc && items.length ? (items[0].map(({ title, id, thumbnail, quantity }) => (
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
