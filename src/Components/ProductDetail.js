import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id } }, search } = this.props;
    const products = await api.getProductsFromCategoryAndQuery('', search);
    const rightProduct = await products.results;
    const findRightProduct = rightProduct.find((product) => product.id === id);
    this.setState({ product: findRightProduct });
  }

  render() {
    const { product } = this.state;
    const { id, price, title, thumbnail } = product;
    const { setCartStorage } = this.props;
    return (
      <div className="card">
        <img className="card-image" src={ thumbnail } alt={ title } />
        <div>
          <p className="card-title" data-testid="product-detail-name">{ title }</p>
          <p>{`R$: ${price}`}</p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => setCartStorage({ id, title, price, thumbnail }) }
          >
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  search: PropTypes.string.isRequired,
  setCartStorage: PropTypes.func.isRequired,
};
