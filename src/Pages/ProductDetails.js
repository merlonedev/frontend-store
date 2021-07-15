import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';
import ButtonCart from '../Components/ButtonCart';
import PrevEvaluation from '../Components/PrevEvaluation';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluations: [],
      email: '',
      rating: 0,
      commentary: '',
    };

    this.updateEvaluations = this.updateEvaluations.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onStarClick = this.onStarClick.bind(this);
    this.importEvaluations = this.importEvaluations.bind(this);
  }

  componentDidMount() {
    const { location: { state: { product: { id } } } } = this.props;
    const importedEvaluations = JSON.parse(localStorage.getItem(id));
    if (importedEvaluations !== null) {
      this.importEvaluations(importedEvaluations);
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  onStarClick(nextValue) {
    this.setState({
      rating: nextValue,
    });
  }

  importEvaluations(importedEvaluations) {
    this.setState({
      evaluations: importedEvaluations,
    });
  }

  updateEvaluations() {
    const { location: { state: { product: { id } } } } = this.props;
    const { evaluations, email, rating, commentary } = this.state;
    const newEvaluation = { email, rating, commentary };
    localStorage.setItem(id, JSON.stringify([...evaluations, newEvaluation]));
    this.setState({
      evaluations: [...evaluations, newEvaluation],
      email: '',
      rating: 0,
      commentary: '',
    });
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { evaluations, email, rating, commentary } = this.state;

    return (
      <div>
        <header>
          <ButtonCart />
        </header>
        <main>
          <h1 data-testid="product-detail-name">{ product.title }</h1>
          <p>{ `Preço: R$${product.price}` }</p>
          <img src={ product.thumbnail } alt="product" />
        </main>

        <fieldset className="rating-fieldset">
          <legend>Avaliação</legend>
          <form className="rating-form">
            <div className="email-and-star-container">
              <input
                name="email"
                className="rating-form-email"
                type="email"
                placeholder="Email"
                value={ email }
                onChange={ this.handleChange }
                required
              />
              <StarRatingComponent
                name="rating"
                starCount={ 5 }
                value={ rating }
                onStarClick={ this.onStarClick }
                onChange={ this.handleChange }
                required
              />
            </div>
            <textarea
              name="commentary"
              className="rating-form-textarea"
              data-testid="product-detail-evaluation"
              type="text"
              placeholder="Mensagem (opcional)"
              value={ commentary }
              onChange={ this.handleChange }
            />
            <button
              className="rating-form-button"
              type="button"
              onClick={ this.updateEvaluations }
            >
              Avaliar
            </button>
          </form>
        </fieldset>
        <br />
        <fieldset className="prevRating-fieldset">
          { evaluations.map((evaluation, index) => (
            <PrevEvaluation
              key={ index }
              evaluation={ evaluation }
            />)) }
        </fieldset>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }),
}.isRequired;

export default ProductDetails;
