/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as API from '../services/api';

class ProductDetails extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     product: {},
  //   };
  // this.getProductDetails = this.getProductDetails.bind(this);
  // }

  // componentDidMount() {
  //   this.getProductDetails();
  // }

  // async getProductDetails() {
  // const { match, product } = this.props;
  // const { params } = match;
  // const { id, searchText = '', category_id } = params;
  // console.log(`getProductDetails:
  //   category_id: ${category_id}
  //   searchText: ${searchText}
  //   id: ${id}
  //   PRODUCT: ${product}`);
  // const { results } = await API.getProductsFromCategoryAndQuery(category_id, searchText);
  // const product = results.find((item) => item.id === id);
  // console.log(`results:
  //   ${results}
  //   __________
  //   product: ${product}
  //   __________`);
  //   this.setState({
  //     product,
  //   });
  // }

  render() {
    const { product, callBack2 } = this.props;
    return (
      <>
        <h2 data-testid="product-detail-name">{ product.title }</h2>
        <div>
          <img alt={ product.title } src={ product.thumbnail } />
          <h3>Detalhes do Produto</h3>
          <ul>
            <li>{product.title}</li>
            <li>{product.price}</li>
          </ul>
        </div>
        <button type="button" onClick={ () => callBack2() }>VOLTAR</button>
        <Link to="/ShoppingCart">CARRINHO DE COMPRAS</Link>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductDetails;
