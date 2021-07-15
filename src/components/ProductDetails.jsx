import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import Quantities from './Quantities';
import ShoppingCartButton from './subcomponents/ShoppingCartButton';
import ReturnButton from './subcomponents/ReturnButton';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      id,
      title: '',
      thumbnail: '',
      qty: 1,
      price: '',
      pictures: {},
    };
    this.getProductFromId = this.getProductFromId.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.state;
    this.getProductFromId(id);
  }

  handleClick() {
    const { callback } = this.props;
    const { id, title, price, thumbnail, qty } = this.state;
    callback({ id, title, price, thumbnail, qty });
  }

  async getProductFromId(id) {
    const apiURL = `https://api.mercadolibre.com/items/${id}`;
    let resultRequest = await fetch(apiURL);
    resultRequest = await resultRequest.json();
    this.setState({
      title: resultRequest.title,
      thumbnail: resultRequest.thumbnail,
      price: resultRequest.price,
      pictures: resultRequest.pictures[0],
      freeShipping: resultRequest.shipping.free_shipping,
    });
  }

  render() {
    const { title, price, pictures, freeShipping } = this.state;
    const { quantity } = this.props;
    const formatter = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
    return (
      <div className="product-details">
        <img src={ pictures.url } alt="Imagem do Produto" className="details-img" />
        <div className="details">
          <h1 data-testid="product-detail-name">
            {title}
          </h1>
          {!freeShipping ? (
            <span data-testid="shipping">
              Confira os preços de frete para sua residência.
            </span>
          ) : (
            <span data-testid="free-shipping">
              Frete Gratuito para sua residência.
            </span>
          )}
          <h2>
            {formatter.format(price)}
          </h2>
          <label htmlFor="rating" className="rating">
            Avaliação 1-5
            <input
              name="rating"
              type="range"
              min="1"
              max="5"
            />
          </label>

          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Conta mais sobre o que achou do produto..."
            className="evaluation"
          />
          <button type="button" className="submit-btn button">
            <p>Enviar</p>
          </button>
          <div className="buttons-container">
            {/* <button type="button" className="button cart-button">
              <Link to="/cart" data-testid="shopping-cart-button">
                <p>
                  <i className="fas fa-shopping-cart" />
                  <Quantities quantity={ quantity } />
                </p>
              </Link>
            </button> */}
            <ShoppingCartButton quantity={ quantity } />
            <button
              type="button"
              data-testid="product-detail-add-to-cart"
              onClick={ this.handleClick }
              className="add-button button"
            >
              <i className="fas fa-cart-arrow-down"> Adicionar ao carrinho</i>
            </button>
            {/* <button type="button" className="button return-button">
              <Link to="/">
                <p>Voltar</p>
              </Link>
            </button> */}
            <ReturnButton />
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.defaultProps = {
  id: undefined,
  quantity: undefined,
};

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired }).isRequired,
  id: PropTypes.string,
  callback: PropTypes.func.isRequired,
  quantity: PropTypes.number,
};
