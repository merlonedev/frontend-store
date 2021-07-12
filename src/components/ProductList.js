import React, { Component } from 'react';

class ProductList extends Component {
  render() {
    return (
      <section>
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default ProductList;
