import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
    this.getProducts = this.getProducts.bind(this);
    this.addCart = this.addCart.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const { match: { params: { id } } } = this.props;
    const requisitionApi = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const result = await requisitionApi.json();
    this.setState({
      product: result,
    });
  }

  addCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify([product]));
    } else if (!cart.some(({ id }) => id === product.id)) {
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    }
  }

  render() {
    const { product: { title, thumbnail, price }, product } = this.state;
    return (
      <section className="detailSection">
        <Link to="/" className="link">
          Voltar
        </Link>
        <Link to="/Cart" data-testid="shopping-cart-button" className="link">
          Carrinho
        </Link>
        <h3 data-testid="product-detail-name" className="productTitle">
          { title }
        </h3>
        <h3 className="productPrice">
          { `Preço: ${price}` }
        </h3>
        <div>
          <img alt="imagem do produto" src={ thumbnail } className="productImg" />
        </div>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addCart(product) }
        >
          addCart22
        </button>
      </section>
    );
  }
}

export default ProductDetails;

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};
