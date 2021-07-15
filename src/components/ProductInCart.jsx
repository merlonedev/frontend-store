import React from 'react';
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from 'react-icons/ai';
import '../css/productInCart.css';
import PropTypes from 'prop-types';

class ProductInCart extends React.Component {
  constructor({ product: { price } }) {
    super();
    this.state = {
      price: Number(price || 0),
      totalPrice: 0,
      count: 1,
    };
    this.totalPriceCalculator = this.totalPriceCalculator.bind(this);
    this.plusItemCount = this.plusItemCount.bind(this);
    this.minusItemCount = this.minusItemCount.bind(this);
    this.getInfoItem = this.getInfoItem.bind(this);

    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true;
    const { onChange } = this.props;
    const { price } = this.state;
    this.totalPriceCalculator();
    onChange(price);
  }

  componentWillUnmount() {
    const { onChange } = this.props;
    const { price } = this.state;
    onChange(-price);
    this.mounted = false;
  }

  getInfoItem() {
    const { getInfoItem, product } = this.props;
    const { totalPrice } = this.state;
    const info = {
      id: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      totalPrice,
    };
    console.log('info', info);
    getInfoItem(info);
  }

  totalPriceCalculator() {
    const { price, count } = this.state;
    if (this.mounted) {
      this.setState({
        totalPrice: (price * count),
      });
    }
  }

  plusItemCount() {
    const { price, count } = this.state;
    const { product: { available_quantity: availableQuantity } } = this.props;
    if (count < availableQuantity) {
      const { onChange: totalCartCalculator } = this.props;
      this.setState({
        count: count + 1,
      }, () => {
        this.totalPriceCalculator();
        totalCartCalculator(price);
      });
    }
  }

  minusItemCount() {
    const { price } = this.state;
    const { onChange, onChangeExclude, product: { id } } = this.props;
    this.setState((state) => ({
      count: state.count ? (state.count - 1) : 0,
    }), () => {
      this.totalPriceCalculator();
      const { count } = this.state;
      if (count) {
        return onChange(-price);
      }
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
  getInfoItem: PropTypes.func.isRequired,
};

export default ProductInCart;
