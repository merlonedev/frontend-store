import React, { Component } from 'react';

class ProductCard extends Component {
  render() {
    return (
      <main>
        <h3>Produto</h3>
        <img src={'http://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg'} alt={ "title" } />
        <p>Preço</p>
      </main>
    );
  }
}

export default ProductCard;
