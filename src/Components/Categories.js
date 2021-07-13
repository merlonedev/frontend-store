import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ul>
          { categories.map((categorie) => (
            <li
              data-testid="category"
              key={ categorie.name }
            >
              { categorie.name }
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array,
}.isRequired;

export default Categories;
