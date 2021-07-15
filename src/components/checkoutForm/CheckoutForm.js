// * Elemento "Nome completo" deve possuir o atributo `data-testid` com o valor `checkout-fullname`.
// * Elemento "Email" deve possuir o atributo `data-testid` com o valor `checkout-email`.
// * Elemento "CPF" deve possuir o atributo `data-testid` com o valor `checkout-cpf`.
// * Elemento "Telefone" deve possuir o atributo `data-testid` com o valor `checkout-phone`.
// * Elemento "CEP" deve possuir o atributo `data-testid` com o valor `checkout-cep`.
// * Elemento "Endereço" deve possuir o atributo `data-testid` com o valor `checkout-address`.
import React from 'react';
import PropTypes from 'prop-types';
import CheckoutInput from './checkoutInput';

class CheckoutForm extends React.Component {
  mapProps = () => {
    const { clientName,
      clientEmail, clientCpf, clientCel, clientPostal, clientAdress } = this.props;

    const props = [clientName,
      clientEmail, clientCpf, clientCel, clientPostal, clientAdress];
    return props;
  }

  render() {
    const { formHandler, buy } = this.props;
    return (
      <form>
        {
          this.mapProps().map((e) => (<CheckoutInput
            labelId={ e.labelId }
            type="text"
            textLabel={ e.labelText }
            value={ e.value }
            eventHandler={ formHandler }
            dataTest={ e.labelId }
            key={ e.labelId }
            name={ e.labelName }
          />))
        }
        <button type="submit" onClick={ buy }>Finalizar</button>
      </form>
    );
  }
}

CheckoutForm.propTypes = {
  clientName: PropTypes.objectOf(String).isRequired,
  clientEmail: PropTypes.objectOf(String).isRequired,
  clientCpf: PropTypes.objectOf(String).isRequired,
  clientCel: PropTypes.objectOf(String).isRequired,
  clientPostal: PropTypes.objectOf(String).isRequired,
  clientAdress: PropTypes.objectOf(String).isRequired,
  formHandler: PropTypes.func.isRequired,
  buy: PropTypes.func.isRequired,
};
export default CheckoutForm;
