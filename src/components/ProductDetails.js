import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
    this.productDetails = this.productDetails.bind(this);
  }

  componentDidMount() {
    this.productDetails();
  }

  async productDetails() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const { results } = await API.getProductsFromCategoryAndQuery(id);
    const product = await results.find((item) => item.id === id);
    return product;
  }

  // componentDidMount() {
  //   const { match } = this.props;
  //   const { params } = match;
  //   const { id } = params;
  //   API.getProductsFromCategoryAndQuery(id).then((resolve) => this.setState({
  //     product: resolve.results,
  //   }));
  // }

  render() {
    const { product } = this.state;
    console.log('produtosssss', product);
    return (
      <div>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <div>
          <img alt={ product.title } src={ product.thumbnail } />
          <h3>Detalhes do Produto</h3>
          <ul>
            <li>{product.name}</li>
            <li>{product.price}</li>
          </ul>
        </div>
        <Link to="/">VOLTAR</Link>
        <Link to="/ShoppingCart">CARRINHO DE COMPRAS</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDetails;
