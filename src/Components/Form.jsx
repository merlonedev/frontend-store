import React from 'react';

const initialState = {
  name: '',
  nota: 0,
  comentario: '',
};

class Form extends React.Component {
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
      <form onSubmit={ this.onSubmitForm }>
        <label htmlFor="nameLabel" className="nameLabel">
          Nome:
          <input
            value={ name }
            type="text"
            name="name"
            onChange={ this.handleChange }
            required
          />
        </label>
        <label htmlFor="avaliacaoLabel" className="avaliacaoLabel">
          Avaliação:
          <input
            type="number"
            className="avaliacao"
            placeholder="Nota"
            value={ nota }
            min="1"
            max="5"
            name="nota"
            onChange={ this.handleChange }
            required
          />
        </label>
        <br />
        <label htmlFor="comentarioLabel" className="comentarioLabel">
          Comentário:
          <textarea
            value={ comentario }
            className="comentario"
            data-testid="product-detail-evaluation"
            name="comentario"
            onChange={ this.handleChange }
            required
          />
        </label>
        <br />
        <button type="submit" className="submitBtn"> Avalie</button>
      </form>
    );
  }
}

export default Form;
