import React from 'react';
import PropTypes from 'prop-types';

class CommentForm extends React.Component {
  constructor() {
    super();
    this.sendComment = this.sendComment.bind(this);

    this.state = {
      productComments: [],
    };
  }

  sendComment(aval) {
    const { productComments } = this.state;
    this.setState({
      propductComments: productComments.push(aval),
    });
  }

  render() {
    const avaliacao = {
      email: "",
      rate: "",
      comment: "",
    }

    const changeAval = ({ target }) => {
      const { name, value } = target;
      avaliacao[name] = value;
    }

    return(
      <section>
        <h1>Avaliações</h1>
        <form>
          <input type="text" name="email" placeholder="Email" onChange={ changeAval } />
          <ul id="rating">
            <input type="radio" name="rate" onClick={ changeAval } value="1" />
            <input type="radio" name="rate" onClick={ changeAval } value="2" />
            <input type="radio" name="rate" onClick={ changeAval } value="3" />
            <input type="radio" name="rate" onClick={ changeAval } value="4" />
            <input type="radio" name="rate" onClick={ changeAval } value="5" />
          </ul>
          <textarea
            data-testid="product-detail-evaluation"
            name="comment"
            maxLength="200"
            placeholder="Digite seu comentário"
            onChange={ changeAval }
          />
          <button onClick={(event) => {
              event.preventDefault();
              this.sendComment(avaliacao);
            }}
          >
            Enviar
          </button>
        </form>
      </section>
    );
  }
}

export default CommentForm;