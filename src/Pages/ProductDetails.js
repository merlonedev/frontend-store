import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';
import ButtonCart from '../Components/ButtonCart';
import PrevEvaluation from '../Components/PrevEvaluation';
import image from '../Images/ReturnToHomeIcon.png';

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
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { location: { state: { product: { title } } } } = this.props;
    const importedEvaluations = JSON.parse(localStorage.getItem(title));
    if (importedEvaluations !== null) {
      this.importEvaluations(importedEvaluations);
    }
  }

  handleClick() {
    const { location: { state: { product } } } = this.props;
    localStorage.setItem(
      product.id,
      JSON.stringify(product),
    );
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
    const { location: { state: { product: { title } } } } = this.props;
    const { evaluations, email, rating, commentary } = this.state;
    const newEvaluation = { email, rating, commentary };
    localStorage.setItem(title, JSON.stringify([...evaluations, newEvaluation]));
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
        <header className="productDetails-header">
          <Link to="/">
            <img alt="icone retornar pagina principal" width="50px" src={ image } />
          </Link>
          <ButtonCart />
        </header>

        <main>
          <div className="basic-product-infos-container">
            <div className="title-and-price-container">
              <h4
                className="product-detail-name"
                data-testid="product-detail-name"
              >
                { product.title }
              </h4>
              <p>{ `Preço: R$${product.price}` }</p>
            </div>
            <img className="product-image" src={ product.thumbnail } alt="product" />
          </div>
        </main>

        <div className="button-and-quantity-container">
          <button
            type="button"
            className="button-add-to-cart"
            data-testid="product-detail-add-to-cart"
            onClick={ this.handleClick }
          >
            Adicionar ao Carrinho
          </button>
        </div>

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
