import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { category } = this.props;
    const { name, id } = category;
    return (
      <div>
        <label data-testid="category" htmlFor={ name }>
          <input type="radio" value={ id } name="category" />
          { name }
        </label>
      </div>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Categories;
