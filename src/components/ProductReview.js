import React from 'react';
import Rating from './Rating';

export default class ProductReview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      nota: '5',
      review: '',
      allReviews: [],
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
    const { email, review, nota, allReviews } = this.state;
    const commentary = {
      email,
      review,
      nota,
    };
    this.setState({
      allReviews: [...allReviews, commentary],
    });
  }

  render() {
    const { email, review, allReviews } = this.state;
    return (
      <div className="CustomerReview-container">
        <h2>Avaliações</h2>
        <form onSubmit={ this.handleSubmit }>
          <input
            type="email"
            placeholder="Email"
            value={ email }
            onChange={ this.handleEmailOnChange }
            required
          />
          <Rating handleRating={ this.handleRating } />
          <textarea
            data-testid="product-detail-evaluation"
            placeholder="Mensagem (opcional)"
            value={ review }
            onChange={ this.handleReviewOnChange }
          />
          <button type="submit">Enviar</button>
        </form>
        <div>
          { allReviews.length > 0 && allReviews.map((item, index) => (
            <div key={ index }>
              <h3>
                E-mail:
                { item.email }
              </h3>
              <h3>
                Nota:
                { item.nota }
              </h3>
              { item.review }
            </div>
          )) }
        </div>
      </div>
    );
  }
}
