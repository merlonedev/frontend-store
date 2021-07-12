import React from 'react';
import PropTypes from 'prop-types';

class CategoriesFilter extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <nav className="categories-bar">
        <ul>
          { categories.map(({ id, name }) => <li key={ id }>{ name }</li>) }
        </ul>
      </nav>
    );
  }
}

CategoriesFilter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default CategoriesFilter;
