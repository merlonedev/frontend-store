import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { product } = this.props;
    return (
      <div>
        { product.map((products) => (
          <div key={ products.id } data-testid="product">
            <h3>{ products.title }</h3>
            <img src={ products.image } alt={ products.title } />
            <p>{`R$: ${products.value}`}</p>
          </div>
        ))}
      </div>
    );
  }
}

SearchBar.propTypes = {
  product: PropTypes.array.isRequired,
}.isRequired;

export default SearchBar;
