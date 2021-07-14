import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ReturnButton extends Component {
  render() {
    return (
      <button type="button" className="button return-button">
        <Link to="/">
          <p>Voltar</p>
        </Link>
      </button>
    );
  }
}
