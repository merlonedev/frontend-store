import React from 'react';
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import '../css/productInCart.css';
import PropTypes from 'prop-types';

class ProductInCart extends React.Component {
  constructor({ product: { price }, count }) {
    super();
    this.state = {
      price: price || 0,
      totalPrice: price * count,
      count,
    };

    this.plusItemCount = this.plusItemCount.bind(this);
    this.minusItemCount = this.minusItemCount.bind(this);
  }

  plusItemCount() {
    const { count } = this.state;
    const {
      product: {
        available_quantity: availableQuantity,
        id,
      },
      sumCountProduct,
    } = this.props;
    if (count < availableQuantity) {
      this.setState((state) => ({
        count: state.count + 1,
        totalPrice: (state.count + 1) * state.price,
      }), () => {
        sumCountProduct(id);
      });
    }
  }

  minusItemCount() {
    const { onChangeExclude, product: { id }, subCountProduct } = this.props;
    this.setState((state) => ({
      count: state.count ? (state.count - 1) : 0,
      totalPrice: (state.count
        ? (state.count - 1)
        : 0) * state.price,
    }), () => {
      const { count, price } = this.state;
      const num = -1;
      if (count) {
        return subCountProduct(id, num);
      }
      onChangeExclude(id, price);
    });
  }

  render() {
    const { product: { id, title, thumbnail }, removeItem } = this.props;
    const { totalPrice, count } = this.state;
    return (
      <div data-testid="product" className="product">
        <AiFillCloseCircle
          onClick={ () => removeItem(id) }
          className="remove-item-cart"
        />
        <img
          src={ thumbnail
            ? thumbnail.replace('I.jpg', 'O.jpg')
            : '../images/imagem-indisponivel.jpg' }
          alt={ title }
          className="image-item"
        />
        <p className="item-cart-name" data-testid="shopping-cart-product-name">{title}</p>
        <div className="quantify-item">
          <AiFillMinusCircle
            onClick={ this.minusItemCount }
            data-testid="product-decrease-quantity"
            className="minus-item"
          />
          <div className="item-count-content">
            <span data-testid="shopping-cart-product-quantity">{ count }</span>
          </div>
          <AiFillPlusCircle
            onClick={ this.plusItemCount }
            data-testid="product-increase-quantity"
            className="plus-item"
          />
        </div>
        <span className="item-price">
          { totalPrice.toLocaleString('pt-BR', {
            minimumFractionDigits: 2, style: 'currency', currency: 'BRL',
          }) }
        </span>
      </div>
    );
  }
}

ProductInCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    available_quantity: PropTypes.number.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  onChangeExclude: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  sumCountProduct: PropTypes.func.isRequired,
  subCountProduct: PropTypes.func.isRequired,
};

export default ProductInCart;
