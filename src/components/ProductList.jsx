import React from 'react';
import PropTypes from 'prop-types';

class ProductList extends React.Component {
  render() {
    const { handleChange, handleClick } = this.props;
    return (
      <div>
        <input
          name="query"
          type="text"
          data-testid="query-input"
          onChange={ handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ handleClick }
        >
          Buscar
        </button>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </div>
    );
  }
}

ProductList.propTypes = {
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
}.isRequired;

export default ProductList;
