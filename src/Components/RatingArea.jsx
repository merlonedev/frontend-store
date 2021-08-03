import React, { Component } from 'react';
import RateCard from './RateCard';

const initialState = {
  email: '',
  rateValue: 0,
  message: '',
};

const ratesArray = [];

class RatingArea extends Component {
  constructor() {
    super();
    this.getRate = this.getRate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderRateCard = this.renderRateCard.bind(this);
    this.state = {
      email: '',
      rateValue: 0,
      message: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  getRate() {
    const { email, message, rateValue } = this.state;
    ratesArray.push({ email, message, rateValue });
    this.setState(initialState);
  }

  renderRateCard() {
    return (
      ratesArray.map(({ email, rateValue, message }) => (<RateCard
        key={ email }
        email={ email }
        rateValue={ rateValue }
        message={ message }
      />))
    );
  }

  renderForm() {
    const { email, message, rateValue } = this.state;
    const { handleChange } = this;
    return (
      <form className="rating-form">
        <h3>Avaliação</h3>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={ email }
          onChange={ handleChange }
        />
        <label htmlFor="rating">
          Nota
          <input
            placeholder="Dê a avaliação do filme"
            type="number"
            step={ 0.5 }
            min={ 0 }
            max={ 5 }
            name="rateValue"
            value={ rateValue }
            onChange={ handleChange }
          />
        </label>
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (Opcional)"
          name="message"
          value={ message }
          onChange={ handleChange }
        />
        <button
          type="button"
          className="rating-button"
          onClick={ this.getRate }
        >
          Avaliar
        </button>
      </form>
    );
  }

  render() {
    return (
      <div>
        {this.renderForm()}
        {this.renderRateCard()}
      </div>
    );
  }
}

export default RatingArea;
