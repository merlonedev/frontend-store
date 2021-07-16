import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    const { categories, click } = this.props;
    return (
      <nav data-testid="nav-containe">
        { categories && categories.map((categorie) => (
          <button
            type="button"
            key={ categorie.id }
            onClick={ click }
            data-testid="category"
            id={ categorie.id }
            name="categorie"
          >
            { categorie.name }
          </button>
        )) }
      </nav>
    );
  }
}

NavBar.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  click: PropTypes.func.isRequired,
};

export default NavBar;
