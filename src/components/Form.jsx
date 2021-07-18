import React, { Component } from 'react';
import '../css/form.css';
import StarRatings from 'react-star-ratings';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      rating: 1,
      email: '',
      opinion: '',
    };
    this.starRating = this.starRating.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    const { name } = event.target;
    const value = event.target.type === 'checkbox'
      ? event.target.checked
      : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(e) {
    e.preventDefault();
    this.setState({
      rating: 1,
      email: '',
      opinion: '',
    });
  }

  starRating(customerVal) {
    this.setState({
      rating: customerVal,
    });
  }

  render() {
    const { rating, email, opinion } = this.state;
    return (
      <form className="star-form">
        <label htmlFor="email" className="label-form">
          <div className="email-star">
            <input
              required
              type="email"
              placeholder="Email"
              className="email-input"
              value={ email }
              onChange={ this.handleChange }
              name="email"
            />
            <StarRatings
              className="stars"
              rating={ rating }
              starRatedColor="yellow"
              changeRating={ this.starRating }
              numberOfStars={ 5 }
              starDimension="35px"
              starHoverColor="yellow"
              name="rating"
            />
          </div>
          <textarea
            className="textarea"
            cols="10"
            rows="5"
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            value={ opinion }
            onChange={ this.handleChange }
            name="opinion"
          />
          <button
            type="submit"
            className="btn"
            onClick={ this.onClick }
          >
            Avaliar
          </button>
        </label>
      </form>
    );
  }
}

export default Form;
