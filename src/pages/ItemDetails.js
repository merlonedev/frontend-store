import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import * as api from '../services/api';

class ItemDetails extends Component {
  constructor() {
    super();

    this.state = {
      item: [],
      loading: true,
    };

    this.getItem = this.getItem.bind(this);
  }

  componentDidMount() {
    const { match } = this.props;
    const { params } = match;
    const { id, query } = params;
    this.getItem(id, query);
  }

  getItem(id, query) {
    api.getProductsFromCategoryAndQuery(id, query)
      .then((response) => {
        this.setState({
          item: response.results.find((item) => item.id === id),
          loading: false,
        });
      });
  }

  render() {
    const { item, loading } = this.state;
    const { title, price, thumbnail } = item;
    return (
      <main>
        { loading && <Loading />}
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        <h2>
          { `R$${price}` }
        </h2>
      </main>
    );
  }
}

ItemDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      query: PropTypes.string,
    }),
  }).isRequired,
};

export default ItemDetails;
