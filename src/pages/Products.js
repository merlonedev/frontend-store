import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from './NotFound';

class Products extends Component {
  render() {
    const { productList } = this.props;
    if (productList.length === 0) {
      return <NotFound />;
    }
    return (
      <div>
        { productList.map((item) => (
          <div key={ item.id } data-testid="product">
            <h1>{ item.title }</h1>
            <img src={ item.thumbnail } alt={ item.title } />
            <p>{`R$: ${item.price}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.array,
    PropTypes.object,
  ).isRequired,
};

export default Products;
