import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotFound from '../notFound/NotFound';

class ProductsDisplay extends Component {
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

ProductsDisplay.propTypes = {
  productList: PropTypes.arrayOf(
    PropTypes.array,
    PropTypes.object,
  ).isRequired,
};

export default ProductsDisplay;
