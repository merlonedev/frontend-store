import React from 'react';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  render() {
    const { categories, categorieSelect } = this.props;
    return (
      <aside>
        <h3>Categorias:</h3>
        <ul type="none">
          { categories.map((categorie) => (
            <li key={ categorie.id }>
              <label key={ categorie.id } htmlFor={ categorie.id }>
                { categorie.name }
                <input
                  data-testid="category"
                  type="radio"
                  key={ categorie.id }
                  value={ categorie.id }
                  name={ categorie.name }
                  onClick={ categorieSelect }
                />
              </label>
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
