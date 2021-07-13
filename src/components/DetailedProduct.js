import React from 'react';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

class DetailedProduct extends React.Component {
  constructor() {
    super();
    this.setProductById = this.setProductById.bind(this);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.setProductById();
  }

  async setProductById() {
    const { match } = this.props;
    const { id } = match.params;
    const { results } = await getProductsFromCategoryAndQuery('', id);
    console.log(results);
  }

  render() {
    return (
      <main data-testid="product">
        {/* <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price}` }</p> */}
      </main>
    );
  }
}

DetailedProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetailedProduct;
