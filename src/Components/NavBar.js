import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavBar extends Component {
  render() {
    const { categories, click } = this.props;
    // console.log('NavBar', categories);
    return (
      <nav data-testid="nav-containe">
        { categories && categories.map((categorie) => (
          // {/*  */}<label htmlFor="nav-categorie" key={ categorie.id }>
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

          // </label>
        )) }
      </nav>
    );
    // Como levar o categorie.id para a func que esta em Home (pai)

    // Como fazer para o radio button ficar selecionado
  }
}

NavBar.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  click: PropTypes.func.isRequired,
};

export default NavBar;
