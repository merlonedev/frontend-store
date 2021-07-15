import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';

class NavBar extends Component {
  render() {
    const { categories, loading, click } = this.props;
    console.log('NavBar', categories);
    if (loading) return <Loading />;
    return (
      <nav>
        <ul>
          { categories.map((categorie) => (
            <li
              key={ categorie.id }
              onClick={ click }
              data-testid="categorie"
            >
              { categorie.name }
            </li>)) }
        </ul>
      </nav>
    );
  }
}

NavBar.propTypes = {
  categories: PropTypes.arrayOf(Object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default NavBar;
