import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ButtonCart from '../Components/ButtonCart';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: [],
    };

    this.fetchDetail = this.fetchDetail.bind(this);
  }

  componentDidMount() {
    this.fetchDetail();
  }

  async fetchDetail() {
    const results = await getProductsFromCategoryAndQuery();
    this.setState({
      product: results,
    });
  }

  render() {
    const { location: { state: { title, thumbnail, price } } } = this.props;
    const { product } = this.state;
    console.log(product);
    return (
      <section data-testid="product-datail-container">
        <Link to="/">Home</Link>
        <ButtonCart />

        <div data-testid="product-detail-container-title">
          <h3 data-testid="product-detail-name">{ title }</h3>
        </div>
        <div data-testid="product-detail-container-img">
          <img src={ thumbnail } alt={ title } />
        </div>
        <div data-testid="product-detail-container-description">
          <p>Descrição</p>
          <p>{ price }</p>
        </div>
      </section>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string,
      price: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
