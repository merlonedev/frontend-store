import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import RatingArea from './RatingArea';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.state = {
      product: {},
      freeShipping: false,
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
    const freeShippingState = findRightProduct.shipping.free_shipping;
    this.setState({ product: findRightProduct, freeShipping: freeShippingState });
  }

  render() {
    const { product, freeShipping } = this.state;
    const { id, price, title, thumbnail } = product;
    const { setCartStorage } = this.props;
    return (
      <div className="product-detail">
        <div className="card-detail">
          <img className="card-image-detail" src={ thumbnail } alt={ title } />
          <div>
            <p className="card-title" data-testid="product-detail-name">{ title }</p>
            { freeShipping && <p> Frete Grátis </p>}
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
        <section className="rating">
          <RatingArea />
        </section>
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

export default ProductDetail;
