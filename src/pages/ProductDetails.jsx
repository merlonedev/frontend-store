import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReviewForm from '../components/ReviewForm';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      cartQTD: 0,
    };
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    this.getCartQTD(cart);
  }

  handleAddToCart(item) {
    const { title, price, id, available_quantity: avQtd } = item;
    console.log(avQtd);
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart[id]) {
      cart = { ...cart,
        [id]: [title, cart[id][1] + 1, price, avQtd] };
    } else {
      cart = { ...cart, [id]: [title, 1, price, avQtd] };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cart) {
      this.getCartQTD(cart);
    }
  }

  getCartQTD(cart) {
    let cartQTD = 0;
    if (cart) {
      Object.values(cart).forEach((item) => {
        cartQTD += item[1];
      });
    }
    this.setState({
      cartQTD,
    });
  }

  clearStorage() {
    localStorage.removeItem('product');
  }

  render() {
    const { loading, cartQTD } = this.state;
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;
    if (loading) { return <p>Loading...</p>; }
    return (
      <main>
        <Link to="/" onClick={ this.clearStorage }>VOLTAR</Link>
        <div className="details-shoppingCart">
          <Link data-testid="shopping-cart-button" to="/shoppingcart">CARRINHO</Link>
          <p data-testid="shopping-cart-size">{ cartQTD }</p>
        </div>
        <h1 data-testid="product-detail-name">{title}</h1>
        <h1>{price}</h1>
        <img src={ thumbnail } alt={ title } />
        <section className="details">
          <h3>Especificações Técnicas</h3>
          <ul>
            {/* Precisei colocar 'attr' ao invés de 'attribute' por não conseguir
            corrigir lint */}
            { attributes.map((attr) => (
              attr.value_name
                ? <li key={ attr.id }>{`${attr.name}: ${attr.value_name}`}</li>
                : false
            ))}
          </ul>
          <ReviewForm />
        </section>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.handleAddToCart(product) }
        >
          ADICIONAR AO CARRINHO
        </button>
      </main>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        attributes: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string,
          value_name: PropTypes.string,
        })),
      }),
    }),
  }).isRequired,
};
