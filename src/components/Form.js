import React, { Component } from 'react';

const initialState = {
  name: '',
  nota: 0,
  comentario: '',
};

class Form extends Component {
  constructor() {
    super();

    this.state = initialState;
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSubmitForm = (e) => {
    console.log(this.state);
    e.preventDefault();
    const { name, nota, comentario } = this.state;
    localStorage.setItem(name, [nota, comentario]);
    this.setState(initialState);
  }

  render() {
    const { name, nota, comentario } = this.state;
    return (
      <form>
        <label htmlFor="name-label">
          Nome:
          <input
            type="text"
            name="name"
            value={ name }
            onChange={ this.handleChange }
            id="name-label"
            required
          />
        </label>
        <br />
        <label htmlFor="avaliator-label">
          Avaliação:
          <input
            type="number"
            name="nota"
            value={ nota }
            min="1"
            max="5"
            onChange={ this.handleChange }
            id="avaliator-label"
            required
          />
        </label>
        <br />
        <label htmlFor="comment-label">
          Comentário:
          <textarea
            type="text"
            name="comentario"
            value={ comentario }
            onChange={ this.handleChange }
            id="comment-label"
            data-testid="product-detail-evaluation"
          />
        </label>
        <br />
        <button type="submit" className="submitBtn"> Avalie</button>
      </form>
    );
  }
}

export default Form;
