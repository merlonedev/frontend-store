import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getCategories } from '../services/api';

export default class CategoriesBar extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const arrayCategoria = await getCategories();
    this.setState({
      categories: arrayCategoria,
    });
  }

  allCategories() {
    const { categories } = this.state;
    return categories.map((category) => this.renderLi(category));
  }

  renderLi(category) {
    const { onCategoryClick } = this.props;
    return (
      <li
        key={ category.id }
      >
        <Link
          to="/"
          data-testid="category"
          onClick={ () => onCategoryClick(category.id) }
        >
          { category.name }
        </Link>
      </li>
    );
  }

  render() {
    return (
      <div>
        <p>Categorias:</p>
        <ul>{this.allCategories()}</ul>
      </div>
    );
  }
}

CategoriesBar.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};
