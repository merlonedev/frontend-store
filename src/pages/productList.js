import React from 'react';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      products: undefined,
    };
  }

  render() {
    const { products } = this.state;
    if (products) {
      return (
        <section>Produtos aqui</section>
      );
    }
    return (
      <section>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
      </section>
    );
  }
}

export default ProductList;
