import React from 'react';
import PropTypes from 'prop-types';

class AvaliationForm extends React.Component {
  render() {
    const { userEmail,
      userComent, userRating, formHandleChange, formClickHandler } = this.props;
    return (
      <form>
        <label htmlFor="userEmail">
          E-mail:
          <input
            name="userEmail"
            id="userEmail"
            type="text"
            onChange={ formHandleChange }
            value={ userEmail }
          />
        </label>
        <label htmlFor="userComent">
          Deixe um comentário sobre este produto
          <input
            data-testid="product-detail-evaluation"
            name="userComent"
            id="userComent"
            type="textArea"
            value={ userComent }
            onChange={ formHandleChange }
          />
        </label>
        <label htmlFor="userRating">
          Nota
          <input
            type="number"
            id="userRating"
            name="userRating"
            onChange={ formHandleChange }
            value={ userRating }
          />
        </label>
        <button type="button" onClick={ formClickHandler }>Avaliar</button>
      </form>
    );
  }
}

AvaliationForm.propTypes = {
  userEmail: PropTypes.string,
  userRating: PropTypes.string,
  userComent: PropTypes.string,
  formHandleChange: PropTypes.func.isRequired,
  formClickHandler: PropTypes.func.isRequired,
};

AvaliationForm.defaultProps = {
  userEmail: '',
  userComent: '',
  userRating: '',
};

export default AvaliationForm;
