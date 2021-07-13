import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCategories extends Component {
  render() {
    const { productCategories } = this.props;
    if (productCategories) {
      return (
        <ul>
          {
            productCategories.map((productCategory) => (
              <li data-testid="category" key={ productCategory.id }>
                {productCategory.name}
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
};

ProductCategories.defaultProps = {
  productCategories: undefined,
};
