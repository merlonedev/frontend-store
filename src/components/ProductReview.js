import React from 'react';
import Rating from './Rating';
// import { Rating } from '@material-ui/lab';

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
    event.preventDefault();
    const { email } = this.state;
    console.log(email);
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
          <Rating />
          {/* <Rating
            name="half-rating"
            defaultValue={ 2.5 }
            precision={ 0.5 }
          /> */}
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
