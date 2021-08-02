import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCategories extends Component {
  render() {
    const { productCategories, categoryHandler } = this.props;
    if (productCategories) {
      return (
        <ul>
          {
            productCategories.map((productCategory) => (
              <li
                key={ productCategory.id }
              >
                <button
                  data-testid="category"
                  type="button"
                  onClick={ () => categoryHandler(productCategory.id) }
                >
                  {productCategory.name}
                </button>
              </li>
            ))
          }
        </ul>
      );
    }
    return (
      <h1>Carregando Categorias</h1>
    );
  }
}

ProductCategories.propTypes = {
  productCategories: PropTypes.arrayOf(Object),
  categoryHandler: PropTypes.func.isRequired,
};

ProductCategories.defaultProps = {
  productCategories: undefined,
};

export default ProductCategories;
