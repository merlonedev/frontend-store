import React from 'react';

export default class ProductReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      review: '',
    };

    this.handleReviewOnChange = this.handleReviewOnChange.bind(this);
    this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailOnChange({ target }) {
    this.setState({
      email: target.value,
    });
  }

  handleReviewOnChange({ target }) {
    this.setState({
      review: target.value,
    });
  }

  handleSubmit(event) {
    const { email } = this.state;
    alert(`Olá: ${email}`);
    event.preventDefault();
  }

  render() {
    const { email, review } = this.state;
    return (
      <div className="CustomerReview-container">
        <h2>Avaliações</h2>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleEmailOnChange }
          />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            value={ review }
            onChange={ this.handleReviewOnChange }
          />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    );
  }
}
