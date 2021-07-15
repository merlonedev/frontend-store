import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Coments extends Component {
  render() {
    const { email, ratting, message } = this.props;
    return (
      <div>
        <h4>{ email }</h4>
        <h4>{ ratting }</h4>
        <p>{ message }</p>
      </div>
    );
  }
}

Coments.propTypes = {
  email: PropTypes.string.isRequired,
  ratting: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Coments;
