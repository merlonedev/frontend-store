import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonToCart from './ButtonToCart';
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
        params: { id, categoryID },
      },

    } = this.props;
    const productList = await getProductsFromCategoryAndQuery(categoryID, '');

    const product = productList.results.find((prod) => prod.id === id);
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    const { addItemToCart } = this.props
    return (
      <div>
        <ButtonToCart />
        <p>DETALHES</p>
        <p data-testid="product-detail-name">{product.title}</p>
        <p>{ product.id }</p>
        <p>{`Preço: R$${product.price}`}</p>
        <p>{`Quantidade disponivel: ${product.available_quantity}`}</p>
        <p>{`Quantidade vendida: ${product.sold_quantity}`}</p>
        <button
          type="button"
          onClick={ () => addItemToCart(product) }
          data-testid="product-detail-add-to-cart"
        >
          ADICIONAR ITEM AO CARRINHO
        </button>
        <Link to="/">FECHAR DETALHE</Link>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      categoryID: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetail;
