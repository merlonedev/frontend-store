import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export default class CategoriesBar extends Component {
  render() {
    const { categories, callback } = this.props;
    return (
      <label htmlFor="category" onChange={ callback }>
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
  callback: PropTypes.func.isRequired,
};
