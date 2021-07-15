import React, { Component } from 'react';

class CardCheckout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsPrice: 0,
      products: [],
    };
  }

  componentDidMount() {
    this.setProducts();
  }

  setProducts() {
    const cartStorage = JSON.parse(localStorage.getItem('products')) || [];
    this.setState({ products: cartStorage }, () => this.sumTotal());
  }

  sumTotal() {
    const { products } = this.state;
    const total = products.map((product) => (product.price * product.quantity))
      .reduce((acc, currentValue) => (acc + currentValue), 0);
    this.setState({ productsPrice: total });
  }

  render() {
    const { productsPrice, products } = this.state;
    return (
      <section>
        {products.map((product) => (
          <div key={ product.id }>
            <p>
              { product.title }
            </p>
            <p>
              R$:
              { product.price }
            </p>
          </div>
        ))}
        <p>
          Total:
          { productsPrice.toFixed(2) }
        </p>
      </section>
    );
  }
}

export default CardCheckout;
