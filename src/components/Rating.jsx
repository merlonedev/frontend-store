import React from 'react';
import PropTypes from 'prop-types';

export default class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      rating: '',
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
      <section key={ index }>
        <h4>{ review.email }</h4>
        <h5>{ review.rating }</h5>
        <p><span>{ review.comment }</span></p>
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
          <form>
            <h3>Avaliações</h3>
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={ this.handleChange }
              value={ email }
            />
            <input
              name="rating"
              type="range"
              min="1"
              max="5"
              onChange={ this.handleChange }
              value={ rating }
            />
            <textarea
              name="comment"
              placeholder="Mensagem (Opcional)"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
              value={ comment }
            />
            <button
              type="button"
              onClick={ this.submitReview }
            >
              Avaliar
            </button>
          </form>
        </section>
        <section>
          { this.showReviews(reviews) }
        </section>
      </section>
    );
  }
}

Rating.propTypes = {
  pid: PropTypes.string.isRequired,
};
