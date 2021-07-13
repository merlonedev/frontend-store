import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class DetailsPage extends React.Component {
  async getProductById(categoryId, id) {
    return api.getProductsFromCategoryAndQuery(categoryId, '')
      .then((result) => result.json())
      .then((category) => {
        category.find((product) => product.id === id);
      });
  }

  render() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;

    return (
      <div>
        <span>{ id }</span>
      </div>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default DetailsPage;
