import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Categories extends Component {
  render() {
    const { category } = this.props;
    const { name } = category;
    return (
      <div>
        <h4>{name}</h4>
      </div>
    );
  }
}

Categories.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Categories;
