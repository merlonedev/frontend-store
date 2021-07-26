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
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const { onChange } = this.props;
    const { price } = this.state;
    onChange(price);
  }

  componentWillUnmount() {
    const { onChange } = this.props;
    const { totalPrice } = this.state;
    onChange(-totalPrice);
    this.mounted = false;
  }

  plusItemCount() {
    const { count } = this.state;
    const {
      product: {
        available_quantity: availableQuantity,
        id,
      },
      sumCountProduct,
      onChange: totalCartCalculator,
    } = this.props;
    if (count < availableQuantity) {
      this.setState((state) => ({
        count: state.count + 1,
        totalPrice: (state.count + 1) * state.price,
      }), () => {
        const { price } = this.state;
        totalCartCalculator(price);
        sumCountProduct(id);
      });
    }
  }

  minusItemCount() {
    const { onChange, onChangeExclude, product: { id }, subCountProduct } = this.props;
    this.setState((state) => ({
      count: state.count ? (state.count - 1) : 0,
      totalPrice: (state.count
        ? (state.count - 1)
        : 0) * state.price,
    }), () => {
      const { count, price } = this.state;
      if (count) {
        subCountProduct(id);
        return onChange(-price);
      }
      onChange(-price);
      subCountProduct(id, false);
      onChangeExclude(id);
    });
  }

  render() {
    const { product: { id, title, thumbnail }, onClick } = this.props;
    const { totalPrice, count } = this.state;
    return (
      <div data-testid="product" className="product">
        <AiFillCloseCircle onClick={ () => onClick(id) } className="remove-item-cart" />
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
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onChangeExclude: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  sumCountProduct: PropTypes.func.isRequired,
  subCountProduct: PropTypes.func.isRequired,
};

export default ProductInCart;
