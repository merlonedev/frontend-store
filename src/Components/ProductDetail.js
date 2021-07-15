import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import RatingArea from './RatingArea';

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
    const { price, title, thumbnail } = product;
    return (
      <div>
        <img className="card-image" src={ thumbnail } alt={ title } />
        <div>
          <p className="card-title" data-testid="product-detail-name">{ title }</p>
          <p>{`R$: ${price}`}</p>
        </div>
        <RatingArea />
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
};
