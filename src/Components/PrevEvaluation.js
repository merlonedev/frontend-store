import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

class PrevRating extends Component {
  render() {
    const { evaluation: { email, rating, commentary } } = this.props;

    return (
      <section className="prevRating-section">
        <div>
          <h4>{ email }</h4>
          <StarRatingComponent value={ rating } />
        </div>
        <p>{ commentary }</p>
      </section>
    );
  }
}

export default PrevRating;

PrevRating.propTypes = {
  evaluation: PropTypes.shape({
    email: PropTypes.string,
    rating: PropTypes.number,
    commentary: PropTypes.string,
  }).isRequired,
};
