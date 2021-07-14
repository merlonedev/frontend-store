import React from 'react';
import PropTypes from 'prop-types';
import QuantityButton from './QuantityButton';

class Buttons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 0,
    };
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.changeQuantityText = this.changeQuantityText.bind(this);
  }

  componentDidMount() {
    this.changeQuantityText();
  }

  changeQuantityText() {
    const { product } = this.props;
    this.setState({ quantity: product.quantity });
  }

  increaseQuantity() {
    this.setState(({ quantity }) => ({
      quantity: quantity + 1,
    }), () => {
      const { product } = this.props;
      const products = JSON.parse(localStorage.getItem('products'));
      const index = products.map((productvalue) => productvalue.id).indexOf(product.id);
      products[index].quantity += 1;
      localStorage.setItem('products', JSON.stringify(products));
    });
  }

  decreaseQuantity() {
    this.setState(({ quantity }) => ({
      quantity: quantity - 1,
    }), () => {
      const { product } = this.props;
      const products = JSON.parse(localStorage.getItem('products'));
      const index = products.map((productvalue) => productvalue.id).indexOf(product.id);
      products[index].quantity -= 1;
      localStorage.setItem('products', JSON.stringify(products));
    });
  }

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <QuantityButton
          text="-"
          changeQuant={ this.decreaseQuantity }
          quantity={ quantity }
          testId="product-decrease-quantity"
        />
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <QuantityButton
          text="+"
          changeQuant={ this.increaseQuantity }
          testId="product-increase-quantity"
        />
      </div>
    );
  }
}

Buttons.propTypes = {
  product: PropTypes.shape({
    quantity: PropType.number,
    id: PropType.string,
  }),
}.isRequired;

export default Buttons;
