import React, { Component } from 'react';
import IntlTelInput from 'react-bo

class CheckOutProducts extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fullname,
      email,
      cpf,
      phone,
      cep,
      address,
    };

    this.cpfValidation = this.cpfValidation.bind(this);
    this.emailValidation = this.emailValidation.bind(this);
    this.phoneValidation = this.phoneValidation.bind(this);
  }

  cpfValidation() {
    const cpfRegex = /[\d]{5}-[\d]{3}/;

  }

  emailValidation() {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  }

  phoneValidation() {
    const phoneRegex = [/[1-9]{2} [0-9]+\-[0-9]{4}/, ];
  }
  
  render() { 
    return ( 
      <form>
        <input totalValue/>
        <span>INSIRA SEUS DADOS</span>
        <input 
          data-testid="checkout-fullname"
          type="text" 
          maxLength="64"
        />
        <input
          data-testid="checkout-email"
          type="text"
          size="320"
        />

        <input
          data-testid="checkout-cpf"
          type="text"
        />

        <input
          data-testid="checkout-phone"
          type="text"
        />

        <input
          data-testid="checkout-cep"
          type="text"
        />

        <input
          data-testid="checkout-adrress"
          type="text"
        />

      </form>
     );
  }
}
 
export default CheckOutProducts;