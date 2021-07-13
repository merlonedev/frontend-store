import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      title: '',
      shouldRedirect: false,
    };

    this.onAddToCartItem = this.onAddToCartItem.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
  }

  onAddToCartItem(item) {
    const { addCartItem } = this.props;
    addCartItem(item);
  }

  itemClicked(id, title) {
    this.setState({
      id,
      title,
      shouldRedirect: true,
    });
  }

  render() {
    const { item } = this.props;
    const { title, price, thumbnail, id } = item;
    const { shouldRedirect, id: idState, title: titleState } = this.state;
    if (shouldRedirect) {
      return <Redirect to={ `/infos/${idState}/${titleState}` } />;
    }
    return (
      <div className="container-product">
        <div
          data-testid="product"
          className="products"
          role="presentation"
          onClick={ () => this.itemClicked(id, title) }
        >
          <h4 data-testid="product-detail-link">{ title }</h4>
          <p>{ price }</p>
          <img className="thumbnail" src={ thumbnail } alt={ title } />

        </div>
        <button
          className="btn-cart"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.onAddToCartItem(item) }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
  addCartItem: PropTypes.func.isRequired,
};
