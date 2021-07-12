import React from 'react';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

export default ProductList;
