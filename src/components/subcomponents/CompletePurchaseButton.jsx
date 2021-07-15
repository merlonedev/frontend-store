import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class CompletePurchaseButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handlers } = this.props;
    handlers.emptyCart();
    localStorage.clear();
  }

  render() {
    return (
      <button
        className="button complete-btn"
        type="button"
        onClick={ this.handleClick }
      >
        <Link to="/complete">
          <p>Finalizar Compra</p>
        </Link>
      </button>
    );
  }
}

CompletePurchaseButton.propTypes = {
  handlers: PropTypes.shape({
    emptyCart: PropTypes.func.isRequired,
  }).isRequired,
};
