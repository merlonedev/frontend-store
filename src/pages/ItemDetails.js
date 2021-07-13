import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Form from '../components/Form';
import './ItemDetails.css';
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
      <main className="item-details">
        { loading && <Loading />}
        <div className="item-details-left">
          <h1
            className="item-details-title"
            data-testid="product-detail-name"
          >
            { title }
          </h1>
          <img className="item-details-image" src={ thumbnail } alt={ title } />
          <h2 className="item-details-price">
            { `R$${price}` }
          </h2>
        </div>
        <div className="item-details-right">
          <h2>Especificações Técnicas</h2>
        </div>
        <div className="item-details-form">
          <Form />
        </div>
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
