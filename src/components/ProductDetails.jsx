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
  }

  componentDidMount() {
    const { id } = this.state;
    this.getProductFromId(id);
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
        <Link to="/cart" data-testid="shopping-cart-button">Carrinho</Link>
        <Link to="/">Voltar</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired) }).isRequired,
  id: PropTypes.string.isRequired,
};
