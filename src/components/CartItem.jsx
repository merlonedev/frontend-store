import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      clickReceiver: [],
    };
    this.onclickFunc = this.onclickFunc.bind(this);
  }

  onclickFunc() {
    const { clickReceiver } = this.state;
    const { data } = this.props;
    const { title, price, id } = data;
    const InfoONclick = { title, price, id };
    this.setState({
      clickReceiver: InfoONclick,
    });
    return sessionStorage.setItem('shopItens', JSON.stringify(clickReceiver));
  }

  render() {
    const { data } = this.props;
    const { title, thumbnail, price, id } = data;
    return (
      <div>
        <Link
          data-testid="product-detail-link"
          to={ `/product/${id}` }
        >
          <div data-testid="product">
            <h6>{ title }</h6>
            <img src={ thumbnail } alt={ title } />
            <h6>{ price }</h6>
          </div>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.onclickFunc() }
        >
          Add to Cart
        </button>
      </div>
    );
  }
}

CartItem.propTypes = {
  data: PropTypes.shape({
    price: PropTypes.number,
    title: PropTypes.string,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default CartItem;
