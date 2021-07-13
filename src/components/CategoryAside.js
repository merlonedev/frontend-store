import React from 'react';
import PropTypes from 'prop-types';

class CategoryAside extends React.Component {
  render() {
    const { categoryObj } = this.props;
    return (
      <ul>
        {categoryObj.map((category) => (
          <li
            key={ category.id }
            data-testid="category"
          >
            { category.name }
          </li>))}
      </ul>
    );
  }
}

CategoryAside.propTypes = {
  categoryObj: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryAside;
