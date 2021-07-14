import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class DetailsPage extends React.Component {
  async getProductById(categoryId, id) {
    return api.getProductsFromCategoryAndQuery(categoryId, '')
      .then((results) => results.results)
      .then((category) => category.find((product) => product.id === id))
      .then((details) => details.attributes);
  }

  render() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const product = id.split('-');

    return (
      <div>
        <span>{ product }</span>
        {console.log(this.getProductById(product[0], product[1]))}
      </div>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default DetailsPage;
