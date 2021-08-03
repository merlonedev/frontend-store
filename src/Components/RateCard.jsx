import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RateCard extends Component {
  render() {
    const { email, rateValue, message } = this.props;
    return (
      <div>
        <p>{ email }</p>
        <p>
          Nota:
          { rateValue }
        </p>
        <p>{ message }</p>
      </div>
    );
  }
}

RateCard.defaultProps = {
  message: '',
  rateValue: '5',
};

RateCard.propTypes = {
  email: PropTypes.func.isRequired,
  rateValue: PropTypes.string,
  message: PropTypes.string,
};

export default RateCard;
