import React, { Component } from 'react';
import ReactStars from 'react-rating-stars-component';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      allEvaluations: [],
      user: '',
      comment: '',
      stars: 0,
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  changeEvaluation = (newRating) => {
    this.setState({
      stars: newRating,
    });
  }

  getLocalStorage = () => {
    const { title } = this.props;
    const storage = JSON.parse(localStorage.getItem(`Evaluation ${title}`));
    if (storage) {
      this.setState({
        allEvaluations: storage,
      });
    }
  }

  setLocalStorage = () => {
    const { user, comment, stars } = this.state;
    const { title } = this.props;
    const evaluation = { user, comment, stars };
    const storage = JSON.parse(localStorage.getItem(`Evaluation ${title}`));
    if (storage) {
      localStorage.setItem(`Evaluation ${title}`,
        JSON.stringify([...storage, evaluation]));
      this.setState({
        allEvaluations: [...storage, evaluation],
      });
    } else {
      localStorage.setItem(`Evaluation ${title}`, JSON.stringify([evaluation]));
      this.setState({
        allEvaluations: [evaluation],
      });
    }
    this.setState({
      user: '',
      comment: '',
      stars: 0,
    });
  }

  render() {
    const { user, comment, stars, allEvaluations } = this.state;
    return (
      <div>
        <form>
          <ReactStars
            value={ stars }
            count={ 5 }
            onChange={ this.changeEvaluation }
            size={ 25 }
            isHalf="true"
            activeColor="#ffd700"
          />
          <input
            value={ user }
            name="user"
            onChange={ this.handleChange }
            placeholder="Usuário (opcional)"
            type="text"
          />
          <br />
          <textarea
            data-testid="product-detail-evaluation"
            value={ comment }
            name="comment"
            onChange={ this.handleChange }
            type="text"
            placeholder="Comentário (opcional)"
          />
          <br />
          <button
            onClick={ this.setLocalStorage }
            type="button"
          >
            Avaliar
          </button>
        </form>
        <div>
          {allEvaluations && allEvaluations.map((evaluation, index) => (
            <div key={ index }>
              <h3>{ evaluation.user }</h3>
              <span>{ evaluation.comment }</span>
              <br />
              <span>Avaliação: </span>
              <ReactStars
                size={ 20 }
                value={ evaluation.stars }
                isHalf="true"
                edit={ false }
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Form.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Form;
