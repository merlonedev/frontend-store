import React from 'react';

class Review extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      message: '',
    };
  }

    handleChange = (event) => {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }

    render() {
      const { email, message } = this.state;
      return (
        <section>
          <h1>Avaliações</h1>
          <form>
            <label htmlFor="email">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={ email }
                onChange={ this.handleChange }
              />
            </label>

            <label htmlFor="message" data-testid="product-detail-evalutation-label">
              <textarea
                type="text"
                name="message"
                placeholder="Mensagem(opcional)"
                cols="50"
                rows="5"
                value={ message }
                data-testid="product-detail-evaluation"
                onChange={ this.handleChange }
              />
            </label>

            <button
              type="submit"
            >
              Avaliar
            </button>
          </form>

        </section>

      );
    }
}

export default Review;
