import React, { Component } from 'react';
import Input from './Input';
import Avaliations from './Avaliations';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      rating: '',
      text: '',
      legacyEmail: [],
      legacyRating: [],
      legacyText: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.submitClick = this.submitClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick({ target }) {
    const { value } = target;
    this.setState({
      rating: value,
    });
  }

  submitClick() {
    const { email, rating, text } = this.state;
    const emailString = email;
    const ratingString = rating;
    const textString = text;

    this.setState((prevState) => ({
      legacyEmail: (prevState.legacyEmail
        ? [...prevState.legacyEmail, emailString] : emailString),
      legacyRating: prevState.legacyRating
        ? [...prevState.legacyRating, ratingString] : ratingString,
      legacyText: prevState.legacyText
        ? [...prevState.legacyText, textString] : textString,
    }));
  }

  render() {
    const { email, text, legacyEmail, legacyRating, legacyText } = this.state;
    const stringPlaceHolder = 'Conte-nos sua experiência com este produto';
    return (
      <div>
        <form>
          <Input
            type="text"
            placeholder="Email"
            id="emailInput"
            value={ email }
            name="email"
            onChange={ this.handleChange }
          />
          <Input
            type="radio"
            id="ratingInput1"
            value="1"
            name="rating"
            onClick={ this.handleClick }
          />
          <Input
            type="radio"
            id="ratingInput2"
            value="2"
            name="rating"
            onClick={ this.handleClick }
          />
          <Input
            type="radio"
            id="ratingInput3"
            value="3"
            name="rating"
            onClick={ this.handleClick }
          />
          <Input
            type="radio"
            id="ratingInput4"
            value="4"
            name="rating"
            onClick={ this.handleClick }
          />
          <Input
            type="radio"
            id="ratingInput5"
            value="5"
            name="rating"
            onClick={ this.handleClick }
          />
          <div>
            <textarea
              cols="34"
              rows="10"
              name="text"
              value={ text }
              placeholder={ stringPlaceHolder }
              onChange={ this.handleChange }
              data-testid="product-detail-evaluation"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={ this.submitClick }
            >
              Avaliar
            </button>
          </div>
        </form>
        <Avaliations
          email={ legacyEmail }
          rating={ legacyRating }
          text={ legacyText }
        />
      </div>
    );
  }
}

export default Form;
