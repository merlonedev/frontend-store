import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class NavBar extends Component {
  render() {
    const { categories, loading, click } = this.props;
    // console.log('NavBar', categories);
    if (loading) return <Loading />;
    return (
      <nav data-testid="nav-container">
        { categories.map((categorie) => (
          // {/*  */}<label htmlFor="nav-categorie" key={ categorie.id }>
          <button
            type="button"
            key={ categorie.id }
            onClick={ click }
            data-testid="categorie"
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
  loading: PropTypes.bool.isRequired,
  click: PropTypes.func.isRequired,
};

export default NavBar;
