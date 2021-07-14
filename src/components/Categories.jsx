import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { category: [name, id] } = this.props;
    return (
      <div>
        <label htmlFor={ name }>
          { name }
          <input type="radio" data-testid="category" value={ id } name="category" />
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
