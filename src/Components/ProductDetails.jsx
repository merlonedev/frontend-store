import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from './Form';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
    };
    this.getProducts = this.getProducts.bind(this);
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

  render() {
    const { product: { title, thumbnail, price } } = this.state;
    return (
      <section className="detailSection">
        <Link to="/" className="link">
          Voltar
        </Link>
        <Link to="/Components/Cart" className="link">
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
        <Form />
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
