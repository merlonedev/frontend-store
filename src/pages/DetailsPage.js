import React from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import CartButton from '../components/CartButton';
import ShowDetails from '../components/ShowDetails';

class DetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      rightProduct: {},
    };
    this.getProductByIds = this.getProductByIds.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const productIds = id.split('-');
    this.getProductByIds(productIds[0], productIds[1]);
  }

  async getProductByIds(categoryId, id) {
    return api.getProductsFromCategoryAndQuery(categoryId, '')
      .then((results) => results.results)
      .then((category) => category.find((product) => product.id === id))
      .then((product) => this.setState({
        rightProduct: product,
      }));
  }

  render() {
    const { rightProduct } = this.state;
    return (
      <div>
        {(Object.entries(rightProduct).length > 0)
          ? <ShowDetails product={ rightProduct } /> : null}
        <CartButton />
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
