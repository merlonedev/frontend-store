import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ReturnButton extends Component {
  render() {
    const { path } = this.props;
    return (
      <button type="button" className="button return-button">
        <Link to={ path }>
          <p>Voltar</p>
        </Link>
      </button>
    );
  }
}

ReturnButton.propTypes = {
  path: PropTypes.string.isRequired,
};
