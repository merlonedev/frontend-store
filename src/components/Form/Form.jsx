import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.handleChangeForm = this.handleChangeForm.bind(this);
    this.handleClickForm = this.handleClickForm.bind(this);
  }

  handleChangeForm({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClickForm() {
    this.setState({
    });
  }

  render() {
    return (
      <form>
        <fieldset className="fieldset-form">
          <legend>Avaliações</legend>
          <div>
            <input
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={ this.handleChangeForm }
            />
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          <textarea
            data-testid="product-detail-evaluation"
            name="textarea"
            placeholder="Mensagem(Opcional)"
            onChange={ this.handleChangeForm }
          />
          <button type="button">Avaliar</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
