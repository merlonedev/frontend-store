import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor(props) {
    super();
    const { match: { params: { id } } } = props;
    this.state = {
      id,
      product: '',
      loading: true,
    };
    this.getProduct = this.getProduct.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
    this.getProduct();
  }

  async getProduct() {
    const { id } = this.state;
    api.getProductsFromCategoryAndQuery('', '');
    const product = await api.getItemDetails(id);
    console.log(product);
    this.setState({ product, loading: false });
  }

  render() {
    const { product, loading } = this.state;
    console.log(this.state);
    if (loading) { return <p>Loading...</p>; }
    return (
      <div>
        <Link to="/">VOLTAR</Link>
        <Link to="/shoppingcart">CARRINHO</Link>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <h1>{product.price}</h1>
        <img src={ product.thumbnail } alt={ product.title } />
        <div className="details">
          <h3>Especificações Técnicas</h3>
          <ul>
            {/* Precisei colocar 'attr' ao invés de 'attribute' por não conseguir
            corrigir lint */}
            { product.attributes.map((attr) => (
              attr.value_name
                ? <li key={ attr.id }>{`${attr.name}: ${attr.value_name}`}</li>
                : false
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
