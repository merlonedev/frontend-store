import React from 'react';
import PropTypes from 'prop-types';

class CartCard extends React.Component {
  constructor(props) {
    super(props);
    const { product: { price } } = this.props;
    this.state = {
      valor: price,
      numberProducts: 1,
      soma: price,
    };

    this.sumValueProduct = this.sumValueProduct.bind(this);
    this.subtractionValueProduct = this.subtractionValueProduct.bind(this);
  }

  sumValueProduct() {
    const { valor, numberProducts } = this.state;
    const sum = Number((valor * (numberProducts + 1)).toFixed(2));
    this.setState({
      numberProducts: numberProducts + 1,
      soma: sum,
    });
  }

  subtractionValueProduct() {
    const { valor, numberProducts } = this.state;
    const sum = valor * (numberProducts - 1);
    this.setState({
      numberProducts: numberProducts - 1,
      soma: sum,
    });
    if (numberProducts === 1) {
      this.setState({
        numberProducts: 1,
        soma: valor,
      });
    }
  }

  render() {
    const { product: { title, thumbnail } } = this.props;
    const { soma, numberProducts } = this.state;
    return (
      <div className="main-list">
        <div data-testid="product" className="product">
          <h3 data-testid="shopping-cart-product-name">{ title }</h3>
          <img src={ thumbnail } alt={ title } />
          <p className="price">
            Preço: R$
            { soma }
          </p>
          <p>
            Quantidade:
            <span data-testid="shopping-cart-product-quantity">{numberProducts}</span>
          </p>
          <button
            data-testid="product-decrease-quantity"
            onClick={ this.subtractionValueProduct }
            type="button"
          >
            -
          </button>
          <button
            data-testid="product-increase-quantity"
            onClick={ this.sumValueProduct }
            type="button"
          >
            +
          </button>
        </div>
      </div>
    );
  }
}

CartCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartCard;
