import React from 'react';

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.state = {
      review: '',
      email: '',
    };
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleChange(event) {
    this.setState({
      review: event.target.value,
    });
  }

  render() {
    const { review } = this.state;
    const { email } = this.state;
    return (
      <form>
        <input
          type="text"
          value={ email }
          placeholder="Email"
          onChange={ this.handleChangeEmail }
        />
        <textarea
          type="text"
          data-testid="product-detail-evaluation"
          value={ review }
          placeholder="Avaliação"
          onChange={ this.handleChange }
        />
      </form>
    );
  }
}

export default ReviewForm;
