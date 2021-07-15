import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RadioInput from './RadioInput';

class Evaluation extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <form method="get">
        Avaliações
        <div>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={ handleChange }
            />
          </label>
        </div>
        <div>
          <RadioInput
            id="1"
            name="1star"
            value="1"
            number="1"
            checked={ handleChange }
          />
          <RadioInput
            id="2"
            name="2star"
            value="2"
            number="2"
          />
          <RadioInput
            id="3"
            name="3star"
            value="3"
            number="3"
          />
          <RadioInput
            id="4"
            name="4star"
            value="4"
            number="4"
          />
          <RadioInput
            id="5"
            name="5star"
            value="5"
            number="5"
          />
        </div>
        <div>
          <label htmlFor="coment">
            <input
              data-testid="product-detail-evaluation"
              type="textarea"
              name="coment"
              placeholder="Mensagem (Opcional)"
              onChange={ handleChange }
            />
          </label>
        </div>
        <button type="submit">Avaliar</button>
      </form>
    );
  }
}

Evaluation.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Evaluation;
