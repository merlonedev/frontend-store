import React from 'react';
import PropTypes from 'prop-types';

class CommentForm extends React.Component {
  render() {
    const { handleSendAval, handleChangeAval, aval } = this.props;
    const { email, comment } = aval;
    return (
      <section>
        <h1>Avaliações</h1>
        <form>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={ handleChangeAval }
            value={ email }
          />
          <ul id="rating">
            <input type="radio" name="rate" onClick={ handleChangeAval } value="1" />
            <input type="radio" name="rate" onClick={ handleChangeAval } value="2" />
            <input type="radio" name="rate" onClick={ handleChangeAval } value="3" />
            <input type="radio" name="rate" onClick={ handleChangeAval } value="4" />
            <input type="radio" name="rate" onClick={ handleChangeAval } value="5" />
          </ul>
          <textarea
            data-testid="product-detail-evaluation"
            name="comment"
            maxLength="200"
            placeholder="Digite seu comentário"
            onChange={ handleChangeAval }
            value={ comment }
          />
          <button
            type="submit"
            onClick={ (e) => {
              e.preventDefault();
              handleSendAval();
            } }
          >
            Enviar
          </button>
        </form>
      </section>
    );
  }
}

CommentForm.propTypes = {
  handleSendAval: PropTypes.func.isRequired,
  handleChangeAval: PropTypes.func.isRequired,
  aval: PropTypes.shape({
    email: PropTypes.string,
    comment: PropTypes.string,
  }).isRequired,
};

export default CommentForm;
