import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Avaliations extends Component {
  render() {
    const { email, rating, text } = this.props;
    const string = 'Nota: ';
    return (
      <div>
        { email.map((item, index) => (
          <div key={ index }>
            <hr />
            <h3>{ item }</h3>
            <h4>
              { string }
              { rating[index] }
            </h4>
            <p>{text[index]}</p>
          </div>
        )) }
      </div>
    );
  }
}

Avaliations.propTypes = {
  email: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.arrayOf(PropTypes.string).isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Avaliations;
