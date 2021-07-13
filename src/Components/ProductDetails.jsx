import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends Component {
  constructor() {
    super();
    this.state={
      product: [],
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    const { match: { params: { categoryId, id } } } = this.props;
    const requisitionApi = await api.getProductsFromCategoryAndQuery(categoryId, id);
    const details = requisitionApi.results.find((product) => product.id === id);

    this.setState({
      product: details,
    });
  }

  render() {
    return (
      <section>
        <h3 />
        <button />
        <div>
          <img> {/* imagem do carrinho */} </img>
        </div>
        <h5 />
        <lu>
          {/* <li></li> */}
        </lu>
        <div>

        </div>
      </section>
    );
  }
}

export default ProductDetails