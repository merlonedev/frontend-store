import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  render() {
    const { handleRating } = this.props;
    return (
      <div onChange={ handleRating }>
        <input type="radio" name="nota" value="1" />
        <input type="radio" name="nota" value="2" />
        <input type="radio" name="nota" value="3" />
        <input type="radio" name="nota" value="4" />
        <input type="radio" name="nota" value="5" />
      </div>
    );
  }
}

Rating.propTypes = {
  handleRating: PropTypes.func.isRequired,
};
