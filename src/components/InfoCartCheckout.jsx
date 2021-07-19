import React from 'react';
import PropTypes from 'prop-types';
import '../css/infoCartCheckout.css';

class InfoCartCheckout extends React.Component {
  constructor({ cartItems }) {
    super();
    this.state = {
      ...cartItems,
    };
    this.loadStorage = this.loadStorage.bind(this);
  }

  componentDidMount() {
    const { cartItems: { total } } = this.props;
    if (!total) {
      this.loadStorage();
    }
  }

  loadStorage() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    const total = JSON.parse(localStorage.getItem('total'));
    this.setState({ cartItems, total });
  }

  render() {
    const { cartItems, total } = this.state;
    return (
      <div>
        <section className="product-review">
          <h3>Revise seus Produtos</h3>
          <ul>
            { cartItems.length
              ? cartItems.map(({ product, count }) => (
                <li key={ product.id }>
                  <img src={ product.thumbnail } alt={ product.title } />
                  <span className="product-title">{ product.title }</span>
                  <span className="price-checkout">
                    { (product.price * count)
                      .toLocaleString('pt-BR', {
                        minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}
                  </span>
                </li>
              ))
              : <li>Carrinho Vazio</li> }
          </ul>
        </section>
        <div className="checkout-total">
          <span>Valor total da compra:</span>
          { (cartItems.length ? total : 0).toLocaleString('pt-BR', {
            minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) }
        </div>
      </div>
    );
  }
}

InfoCartCheckout.propTypes = {
  cartItems: PropTypes.shape({
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};

export default InfoCartCheckout;
