import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };

    this.getProductDetail = this.getProductDetail.bind(this);
  }

  componentDidMount() {
    this.getProductDetail();
  }

  async getProductDetail() {
    const {
      match: {
        params: { id },
      },
      productTitle,
    } = this.props;
    const productList = await getProductsFromCategoryAndQuery('', productTitle);
    console.log(productList);
    const product = productList.results.find((prod) => prod.id === id);
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <p>DETALHES</p>
        <p data-testid="product-detail-name">{product.title}</p>
        <p>{ product.id }</p>
        <p>{`Preço: R$${product.price}`}</p>
        <p>{`Quantidade disponivel: ${product.available_quantity}`}</p>
        <p>{`Quantidade vendida: ${product.sold_quantity}`}</p>
        <Link to="/">FECHAR DETALHE</Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  productTitle: PropTypes.string.isRequired,
};

export default ProductDetail;
