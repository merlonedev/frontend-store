import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    };
  }

  componentDidMount() {
    this.requestId();
  }

  async requestId() {
    try {
      const { match: { params: { id } } } = this.props;
      const { getProductsFromCategoryAndQuery } = api;
      const ProductList = await getProductsFromCategoryAndQuery();
      const product = ProductList.results.find((item) => item.id === id);
      this.setState({
        data: product,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    const { data } = this.state;
    if (data) {
      return <p>Carregando</p>;
    }
    const { thumbnail, title, price, attributes } = data;
    const details = (
      attributes
        .map((atributte) => (
          <li key={ atributte.id }>
            { `${atributte.name}: ${atributte.value_name}` }
          </li>
        ))
    );
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h4 data-testid="product-detail-name">{ title }</h4>
        <span>{ `R$: ${price}` }</span>
        { attributes ? details : <p>eita</p>}
        <Link to="/">VOLTAR</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(Object).isRequired,
};
export default ProductDetails;
// Link
// Me ajudou a resolver o erro do map https://stackoverflow.com/questions/24706267/error-cannot-read-property-map-of-undefined
