import React from 'react';

class Checkout extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      total: 0,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const cartProducts = localStorage.getItem('cart');
    this.setState({
      products: cartProducts,
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Finalizar Compra</h1>
      </div>
    );
  }
}

export default Checkout;
