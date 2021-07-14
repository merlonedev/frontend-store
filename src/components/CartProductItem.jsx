import React from 'react';

class CartProductItem extends React.Component {
  constructor() {
    super();

    console.log('teste');
    this.state = {
      count: 1,
    };
    
    this.plusCount = this.plusCount.bind(this);
    this.minusCount = this.minusCount.bind(this);
  }

  componentDidMount() {
    const { product, plusPrice } = this.props;
    plusPrice(product.price);
  }

  plusCount() {
    const { plusPrice, product } = this.props;
    const { price } = product;
    this.setState((oldState, _props) => ({
      count: oldState.count + 1,
    }));
    plusPrice(price);
  }

  minusCount() {
    if (this.state.count > 1) {
      const { minusPrice, product } = this.props;
      const { price } = product;
      this.setState((oldState, _props) => ({
        count: oldState.count - 1,
      }));
      minusPrice(price);
    }
  }
  
  render() {
    const { product } = this.props;
    const { thumbnail, title, price } = product;
    const { count } = this.state;
    return(
      <div className="cart-product-item">
        <img src={ thumbnail } alt={ title } />
        <h6>{ title }</h6>
        <button className="item-button" type="button" onClick={ this.minusCount }>-</button>
        <p>{ count }</p>
        <button className="item-button" type="button" onClick={ this.plusCount }>+</button>
        <p>{ `R$ ${price * count}`}</p>
      </div>
    );
  }
}

export default CartProductItem;
