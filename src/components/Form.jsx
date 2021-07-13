import React, { Component } from 'react';
import './Form.css';
import StarRatings from 'react-star-ratings';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
    };
    this.starRating = this.starRating.bind(this);
  }

  starRating(customerVal) {
    this.setState({
      rating: customerVal,
    });
  }

  render() {
    const { rating } = this.state;
    return (
      <form className="star-form">
        <label htmlFor="email" className="label-form">
          <div className="email-star">
            <input
              type="email"
              placeholder="Email"
              className="email-input"
            />
            <StarRatings
              className="stars"
              rating={ rating }
              starRatedColor="yellow"
              changeRating={ this.starRating }
              numberOfStars={ 5 }
              name="rating"
            />
          </div>
          <textarea
            className="textarea"
            cols="10"
            rows="5"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
          />
          <button
            type="submit"
          >
            Avaliar
          </button>
        </label>
      </form>
    );
  }
}

export default Form;
