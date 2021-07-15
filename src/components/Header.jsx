import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logo from '../img/se_vira_logo.png';

export default class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header className="page-header">
        <img className="logo" src={ Logo } alt="logo" />
        <h1 className="page-title">
          {title}
        </h1>
      </header>
    );
  }
}

Header.defaultProps = {
  title: undefined,
};

Header.propTypes = {
  title: PropTypes.string,
};
