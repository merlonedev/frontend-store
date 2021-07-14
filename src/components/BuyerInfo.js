import React, { Component } from 'react';
import Input from './Input';

class BuyerInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.handlerChange = this.handlerChange.bind(this);
  }

  handlerChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.state;
    return (
      <div>
        <form>
          <h3>Informações do comprador</h3>
          <Input
            handlerChange={ this.handlerChange }
            cpf={ cpf }
            email={ email }
            fullname={ fullname }
            phone={ phone }
            cep={ cep }
            address={ address }
          />
        </form>
      </div>
    );
  }
}

export default BuyerInfo;
