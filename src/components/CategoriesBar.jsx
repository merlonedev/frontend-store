import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export default class CategoriesBar extends Component {
  render() {
    const { categories } = this.props;
    return (
      <label htmlFor="category">
        Categorias
        {
          categories.map(({ id, name }) => (
            <label key={ id } htmlFor={ id }>
              <input
                type="radio"
                value={ id }
                name="category"
                id={ id }
                data-testid="category"
              />
              { name }
            </label>
          ))
        }
      </label>
    );
  }
}

CategoriesBar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    map: PropTypes.func,
  })).isRequired,
};
