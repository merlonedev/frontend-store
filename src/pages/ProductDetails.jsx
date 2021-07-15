import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Evaluation from '../components/Evaluation';
import Coments from '../components/Coments';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      ratting: '',
      message: '',
      productDetail: {},
    };
    this.handleChange = this.handleChange.bind(this);
    this.searchProduct = this.searchProduct.bind(this);
  }

  componentDidMount() {
    this.searchProduct();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  async searchProduct() {
    const { match: { params: { id, categoryId, title } } } = this.props;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, title);
    const findProduct = results.find((result) => result.id === id);
    this.setState({ productDetail: findProduct });
  }

  render() {
    const { productDetail, email, ratting, message } = this.state;
    const { title, thumbnail, price } = productDetail;
    return (
      <section>
        <div>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <h1>{price}</h1>
          <img src={ thumbnail } alt={ title } />
        </div>
        <Evaluation handleChange={ this.handleChange } />
        <Coments email={ email } ratting={ ratting } message={ message } />
      </section>

    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      categoryId: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
