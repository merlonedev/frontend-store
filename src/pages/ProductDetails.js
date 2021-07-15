import React, { Component } from 'react';
import ButtonCart from '../Components/ButtonCart';

class ProductDetails extends Component {
  render() {
    // MLB1370656442 id test
    return (
      <section data-testid="product-datail-container">
        <ButtonCart />
        <div data-testid="product-datail-container-title">
          <h3 data-testid="product-detail-name">Título</h3>
        </div>
        <div data-testid="product-datail-container-img">
          <img src="https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg" alt="titulo" />
        </div>
        <div data-testid="product-datail-container-description">
          <p>Descrição</p>
          <p>Preço</p>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
