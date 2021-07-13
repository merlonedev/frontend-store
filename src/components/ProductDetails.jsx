import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { match: { params: { id } } } = this.props;
    this.state = {
      id,
      title: '',
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
    const { id } = this.state;
    callback(id);
  }

  async getProductFromId(id) {
    const apiURL = `https://api.mercadolibre.com/items/${id}`;
    let resultRequest = await fetch(apiURL);
    resultRequest = await resultRequest.json();
    this.setState({
      title: resultRequest.title,
      price: resultRequest.price,
      pictures: resultRequest.pictures[0],
    });
  }

  render() {
    const { title, price, pictures } = this.state;
    return (
      <div>
        <img src={ pictures.url } alt="Imagem do Produto" />
        <h1 data-testid="product-detail-name">
          {title}
        </h1>
        <p>{price}</p>
        <input
          name="rating"
          type="range"
          min="1"
          max="5"
          // onChange={ this.handleChange }
          // value={ rating }
        />

        <textarea data-testid="product-detail-evaluation" />
        <button type="button">Submit</button>

        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Link to="/">Voltar</Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.defaultProps = {
  id: undefined,
};

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired }).isRequired,
  id: PropTypes.string,
  callback: PropTypes.func.isRequired,
};
