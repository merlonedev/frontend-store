import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CartButton from '../components/CartButton';
import ShowDetails from '../components/ShowDetails';

class DetailsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      rightProduct: {},
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const productIds = id.split('-');
    getProductsFromCategoryAndQuery(productIds[0], '')
      .then((results) => results.results)
      .then((category) => category.find((product) => product.id === productIds[1]))
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
