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
      loading: true,
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
      loading: false,
    });
  }

  render() {
    const { product, loading } = this.state;
    const { addItemToCart } = this.props;
    if (loading) {
      return (
        <p>Carregando informações do produto</p>
      );
    }
    return (
      <div>
        <ButtonToCart />
        <div>
          <p>DETALHES</p>
          <img alt="Foto do produto" src={ product.thumbnail } />
          <div className="product-details-body">
            <p data-testid="product-detail-name">{product.title}</p>
            <p>{ product.id }</p>
            <p>{`Preço: R$${product.price}`}</p>
            <p>{`Quantidade disponivel: ${product.available_quantity}`}</p>
            <p>{`Quantidade vendida: ${product.sold_quantity}`}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={ () => addItemToCart(product) }
          data-testid="product-detail-add-to-cart"
        >
          ADICIONAR ITEM AO CARRINHO
        </button>
        <Link to="/">Voltar para home page</Link>
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
  addItemToCart: PropTypes.func.isRequired,
};

export default ProductDetail;
