import React from 'react';
import Rating from './Rating';

export default class ProductReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      nota: '1',
      review: '',
    };

    this.handleReviewOnChange = this.handleReviewOnChange.bind(this);
    this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
    this.handleRating = this.handleRating.bind(this);
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

  handleRating(event) {
    this.setState({
      nota: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, review, nota } = this.state;
    console.log(email, nota, review);
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
          <Rating handleRating={ this.handleRating } />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            value={ review }
            onChange={ this.handleReviewOnChange }
          />
          <button type="submit">
            Enviar
          </button>
        </form>
        <div>
          { console.log() }
        </div>
      </div>
    );
  }
}
