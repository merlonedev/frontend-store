import React from 'react';
import FinalForm from './FinalForm';

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
      <main>
        <h1>Finalizar Compra</h1>
        <FinalForm />
      </main>
    );
  }
}

export default Checkout;
