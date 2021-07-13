import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div>
        <ul>
          {categories.map(({ name, id }) => (
            <li
              data-testid="category"
              key={ id }
            >
              { name }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Category.propTypes = {
  categories: PropTypes.string,
}.isRequired;

export default Category;
