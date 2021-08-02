import React, { Component } from 'react';
import AvaliationForm from '../components/AvaliationForm';
import Feedbacks from '../components/Feedbacks';

class Details extends Component {
  constructor() {
    super();
    this.localStorageGet = this.localStorageGet.bind(this);
    this.localChanger = this.localChanger.bind(this);
    this.formClickHandler = this.formClickHandler.bind(this);
    this.formHandleChange = this.formHandleChange.bind(this);
    this.saveFeedBacks = this.saveFeedBacks.bind(this);
    this.localFeedbacks = this.localFeedbacks.bind(this);
    this.state = {
      product: {},
      userComent: '',
      userRating: '',
      userEmail: '',
      usersFeedbacks: [],
    };
  }

  componentDidMount() {
    this.localStorageGet();
  }

  localStorageGet() {
    const productStorage = JSON.parse(localStorage.getItem('prdctDetails'));
    this.setState({
      product: productStorage,
    }, () => this.localFeedbacks());
  }

  localFeedbacks() {
    const { product } = this.state;
    const feedbacks = JSON.parse(localStorage.getItem(`usersFeedbacks${product.id}`));
    this.setState({
      usersFeedbacks: feedbacks !== null ? [...feedbacks] : [],
    });
  }

  localChanger(product) {
    if (localStorage.getItem('Cart') !== null) {
      let local = JSON.parse(localStorage.getItem('Cart'));
      local = [...local, product];
      localStorage.setItem('Cart', JSON.stringify(local));
    } else {
      localStorage.setItem('Cart', JSON.stringify([product]));
    }
  }

  formHandleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  formClickHandler() {
    const { userComent, userRating, userEmail } = this.state;
    const feedback = {
      userComent: '',
      userRating: '',
      userEmail: '',
    };
    feedback.userComent = userComent;
    feedback.userRating = userRating;
    feedback.userEmail = userEmail;
    this.setState((e) => ({
      usersFeedbacks: [...e.usersFeedbacks, feedback],
    }), () => this.saveFeedBacks());
  }

  saveFeedBacks() {
    const { product } = this.state;
    const { usersFeedbacks } = this.state;
    localStorage.setItem(`usersFeedbacks${product.id}`, JSON.stringify(usersFeedbacks));
  }

  render() {
    const { product, userComent, userRating, usersFeedbacks, userEmail } = this.state;
    const { title, price, thumbnail, sold_quantity: soldQt, condition,
      available_quantity: avaliables } = product;
    return (
      <section>
        <div>
          <img alt="Product Cover" src={ thumbnail } />
          <p>{ `${condition} | Preço: R$ ${price}` }</p>
          <p data-testid="product-detail-name">{ `Nome: ${title}` }</p>
          <p>{ `Quantidade vendida: ${soldQt}( ${avaliables} disponíveis)` }</p>
          <button
            type="button"
            onClick={ () => this.localChanger(product) }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <AvaliationForm
          userComent={ userComent }
          userRating={ userRating }
          formClickHandler={ this.formClickHandler }
          formHandleChange={ this.formHandleChange }
          userEmail={ userEmail }
        />
        <Feedbacks usersFeedbacks={ usersFeedbacks } />
      </section>
    );
  }
}

export default Details;
