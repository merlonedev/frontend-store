import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    const { handleChange } = this.props;
    return (
      <div>
        <nav>
          <select
            onChange={ handleChange }
            name="categoryId"
          >
            {
              categories
                .map((category) => (
                  <option
                    data-testid="category"
                    key={ category.id }
                  >
                    {category.name}
                  </option>
                ))
            }
          </select>
        </nav>
      </div>
    );
  }
}

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
