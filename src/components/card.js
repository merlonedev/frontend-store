import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Card extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      title: '',
      category: '',
      shouldRedirect: false,
    };

    this.onAddToCartItem = this.onAddToCartItem.bind(this);
    this.itemClicked = this.itemClicked.bind(this);
  }

  onAddToCartItem(item) {
    const { addCartItem } = this.props;
    addCartItem(item);
  }

  itemClicked(id, title, category) {
    this.setState({
      id,
      title,
      category,
      shouldRedirect: true,
    });
  }

  render() {
    const { item } = this.props;
    const { title, price, thumbnail, id, shipping, category_id: categoryId } = item;
    const { shouldRedirect, id: idState, title: titleState, category } = this.state;
    if (shouldRedirect) {
      return <Redirect to={ `/infos/${category}/${idState}/${titleState}` } />;
    }
    return (
      <div className="container-product">
        <div
          data-testid="product"
          className="products"
          role="presentation"
          onClick={ () => this.itemClicked(id, title, categoryId) }
        >
          <h4 data-testid="product-detail-link">{ title }</h4>
          <p>{ price }</p>
          <img className="thumbnail" src={ thumbnail } alt={ title } />
          { shipping.free_shipping && <img data-testid="free-shipping" src="https://cdn.awsli.com.br/511/511886/arquivos/frete-gratis-1.png" alt="Frete Gratis" width="100px" /> }
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
    category_id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  addCartItem: PropTypes.func.isRequired,
};
