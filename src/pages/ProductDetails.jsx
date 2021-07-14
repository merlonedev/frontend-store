import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ReviewForm from '../components/ReviewForm';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      product: {
        title: '',
        price: 0,
        thumbnail: '',
      },
      cartQTD: 0,
    };
    this.setItem = this.setItem.bind(this);
  }

  componentDidMount() {
    const item = JSON.parse(localStorage.getItem('product'));
    const cart = JSON.parse(localStorage.getItem('cart'));
    // localStorage.removeItem('product');
    this.setItem(item);
    this.getCartQTD(cart);
    console.log(item);
  }

  handleAddToCart(product) {
    const { title, price, id } = product;
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart && cart[id]) {
      cart = { ...cart,
        [id]: [title, cart[id][1] + 1, price] };
    } else {
      cart = { ...cart, [id]: [title, 1, price] };
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    if (cart) {
      this.getCartQTD(cart);
    }
  }

  setItem(item) {
    this.setState({ product: item, loading: false });
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

  // async getProduct() {
  //   const { id } = this.state;
  //   const product = await api.getItemDetails(id);
  //   console.log(product);
  //   this.setState(() => ({ product, loading: false }));
  //   console.log(this.state);
  // }

  render() {
    const { product, loading, cartQTD } = this.state;
    if (loading) { return <p>Loading...</p>; }
    return (
      <main>
        <Link to="/" onClick={ this.clearStorage }>VOLTAR</Link>
        <div className="details-shoppingCart">
          <Link data-testid="shopping-cart-button" to="/shoppingcart">CARRINHO</Link>
          <p data-testid="shopping-cart-size">{ cartQTD }</p>
        </div>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <h1>{product.price}</h1>
        <img src={ product.thumbnail } alt={ product.title } />
        <section className="details">
          <h3>Especificações Técnicas</h3>
          <ul>
            {/* Precisei colocar 'attr' ao invés de 'attribute' por não conseguir
            corrigir lint */}
            { product.attributes.map((attr) => (
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
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};

ProductDetails.defaultProps = {
  product: {
    title: '',
    price: 0,
  },
};
