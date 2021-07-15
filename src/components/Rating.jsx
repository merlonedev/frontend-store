import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rating: '5',
      comment: '',
      reviews: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitReview = this.submitReview.bind(this);
    this.showReviews = this.showReviews.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.updateState();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateState() {
    const { pid } = this.props;
    this.setState({
      reviews: JSON.parse(localStorage.getItem(pid)),
    });
  }

  showReviews(reviews) {
    if (!reviews) return;
    return reviews.map((review, index) => (
      <section key={ index } className="review">
        <h4 className="review-email">{ review.email }</h4>
        <span>deu nota</span>
        <h5 className="review-rating">{ review.rating }</h5>
        <span>e comentou</span>
        <p className="review-comment">{ review.comment }</p>
      </section>
    ));
  }

  submitReview() {
    const { pid } = this.props;
    const { email, rating, comment } = this.state;
    let reviews = [];
    const review = {
      email,
      rating,
      comment,
    };

    if (localStorage.getItem(pid)) {
      reviews = JSON.parse(localStorage.getItem(pid));
      reviews.push(review);
      localStorage.setItem(pid, JSON.stringify(reviews));
      this.setState({ reviews, email: '', comment: '' });
    } else {
      reviews.push(review);
      localStorage.setItem(pid, JSON.stringify(reviews));
      this.setState({ reviews });
    }
  }

  render() {
    const { email, rating, comment, reviews } = this.state;
    return (
      <section>
        <section>
          <form className="rating">
            <h3>Conte-nos o que achou deste produto!</h3>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={ this.handleChange }
              value={ email }
              className="eval-input"
            />
            <label htmlFor="rating" className="rating-label">
              Avaliação
              <p>1 - 5</p>
              <input
                name="rating"
                type="range"
                min="1"
                max="5"
                onChange={ this.handleChange }
                value={ rating }
              />
            </label>
            <textarea
              name="comment"
              placeholder="Mensagem (Opcional)"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
              value={ comment }
              className="evaluation"
            />
            <button
              type="button"
              onClick={ this.submitReview }
              className="submit-btn button"
            >
              <p>Avaliar</p>
            </button>
          </form>
        </section>
        <section className="reviews">
          <h2>Avaliações</h2>
          { this.showReviews(reviews) }
        </section>
      </section>
    );
  }
}

Rating.propTypes = {
  pid: PropTypes.string.isRequired,
};
