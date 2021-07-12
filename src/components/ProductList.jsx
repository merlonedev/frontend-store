import React from 'react';
import { Link } from 'react-router-dom';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <Link to="/productlist">ProductList</Link>
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
