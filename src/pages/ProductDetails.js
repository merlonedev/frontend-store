import React, { Component } from 'react';
import ButtonCart from '../Components/ButtonCart';

class Productetails extends Component {
  render() {
    return (
      <section>
        <ButtonCart />
        <div>
          <h3>Título</h3>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2012/11/21/17/02/lion-66898_960_720.jpg" alt="titulo" />
          <p>Nome</p>
          <p>Proço</p>
          <p>Descrição</p>
        </div>
      </section>
    );
  }
}

export default Productetails;
