import React from 'react';
import DataInput from './subcomponents/DataInput';

export default class Form1 extends React.Component {
  render() {
    return (
      <form className="form">
        <div className="row">
          <DataInput
            label="Nome completo"
            inputName="fullname"
            inputType="text"
            inputID="checkout-fullname"
          />
          <DataInput
            label="Email"
            inputName="email"
            inputType="text"
            inputID="checkout-email"
          />
        </div>
        <div className="row">
          <DataInput
            label="CPF"
            inputName="cpf"
            inputType="text"
            inputID="checkout-cpf"
          />
          <DataInput
            label="Telefone"
            inputName="phone"
            inputType="text"
            inputID="checkout-phone"
          />
        </div>
        <div className="row">
          <DataInput
            label="CEP"
            inputName="cep"
            inputType="text"
            inputID="checkout-cep"
          />
          <DataInput
            label="Endereço"
            inputName="address"
            inputType="text"
            inputID="checkout-address"
          />
        </div>
      </form>
    );
  }
}
