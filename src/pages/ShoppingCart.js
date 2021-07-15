import React from 'react';
import { Link } from 'react-router-dom';
import CartItems from '../components/CartItems';

const initialState = {
  amount: {}, // Para formar um objeto com chaves " id: quantidade do produto "
  noRepetitions: [], // Para elementos salvos no sessionStorage, mas sem repetições;
};

const emptyMessage = (
  <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.getOnlyOne = this.getOnlyOne.bind(this);
    this.setAmount = this.setAmount.bind(this);
    this.plusUnit = this.plusUnit.bind(this);
    this.lessUnit = this.lessUnit.bind(this);
    this.removeUnit = this.removeUnit.bind(this);
    this.state = initialState;
  }

  componentDidMount() {
    this.getOnlyOne();
    this.setAmount();
  }

  // Altera o estado, atribuindo um novo array sem repetições;
  getOnlyOne() {
    // Buscando produtos salvos da session;
    const sessionItems = JSON.parse(sessionStorage.getItem('addCart'));
    // Se "sessionItems" não for null roda a função;
    if (sessionItems) {
      // "noRepetitions" retorna um array com produtos sem repetições;
      const noRepetitions = sessionItems.reduce((acc, product) => {
        // "someEqual" retorna true ou false se existe algum produto iguala ao atual (com o mesmo id);
        const someEqual = acc.some(({ id }) => product.id === id);
        // Se nenhum produto for igual faz o push do produto atual;
        if (!someEqual) acc.push(product);
        return acc; // Retorna "acc" que é um Array para nova iteração com suas devidas modificações;
      }, []);
      this.setState({ noRepetitions }); // Escrita em "Object Short Hand Notation" para setar o estado;
    }
  }

  // Altera o estado, atribuindo a quantidade por id;
  setAmount() {
    // Buscando produtos salvos da session;
    const sessionItems = JSON.parse(sessionStorage.getItem('addCart'));
    // Se "sessionItems" não for null roda a função;
    if (sessionItems) {
      const amount = sessionItems.reduce((acc, { id }) => {
        const ids = Object.keys(acc); // "ids" é um array com todas as chaves de acc;
        let count = 1; // O item já está no carrinho, então o mínimo é uma unidade dele.
        if (ids.includes(id)) {
          count += acc[id]; // Se existe repetição, adiciona uma unidade;
        }
        acc[id] = count;
        return acc;
      }, {});
      this.setState({ amount }); // Escrita em "Object Short Hand Notation" para setar o estado;
    }
  }

  // Altera o estado e a sessionStorage, adicionando uma unidade;
  plusUnit(id, session, maxAmount) {
    const { amount } = this.state;
    if (amount[id] < maxAmount) {
      // Encontra o primeiro elemento com o id passado por parâmetro;
      const item = session.find(({ id: currId }) => currId === id);

      // Array que contém todos os elementos salvos mais o atual;
      const plusOneItem = [...session, item];
      // Modifica quantidade no session;
      sessionStorage.setItem('addCart', JSON.stringify(plusOneItem));
      this.setAmount(); // Modifica quantidade no estado;
    }
  }

  // Altera o estado sessionStorage, removendo uma unidade;
  lessUnit(id, session) {
    const { amount } = this.state;

    // Encontra o primeiro elemento com o id passado por parâmetro;
    const item = session.find(({ id: currId }) => currId === id);
    if (amount[id] > 1) { // Tem que ter ao menos um produto no carrinho;
      /*
        "splice" é um método para remover um elemento no array; -->
        Seu primeiro parâmetro é o index do elemento. O segundo é
        a quantidade de vezes que removerá um elemento nesta posição;
      */
      session.splice(session.indexOf(item), 1); // Remove o elemento da sessionStorage;

      // Modifica quantidade no session;
      sessionStorage.setItem('addCart', JSON.stringify(session));
      this.setAmount(); // Modifica quantidade no estado;
    }
  }

  // Altera o estado e sessionStorage, removendo o produto;
  removeUnit(id, session) {
    // "removing" recebe apenas produtos com o id diferente do passado por parâmetro;
    const removing = session.filter(({ id: currId }) => currId !== id);

    // Adiciona o array sem nenhum elemento na sessionStorage;
    sessionStorage.setItem('addCart', JSON.stringify(removing));
    this.setAmount(); // Modifica quantidade no estado;
    this.getOnlyOne(); // Modifica o estado "noRepetitions";
  }

  render() {
    const sessionItems = JSON.parse(sessionStorage.getItem('addCart'));
    const { noRepetitions, amount } = this.state;
    return (
      <section>
        <Link to="/">Voltar</Link>
        { !sessionItems
          ? emptyMessage
          : (
            <section>
              <ul>
                <CartItems
                  amount={ amount }
                  noRepetitions={ noRepetitions }
                  sessionItems={ sessionItems }
                  removeUnit={ this.removeUnit }
                  lessUnit={ this.lessUnit }
                  plusUnit={ this.plusUnit }
                />
              </ul>
              <p>
                { `Quantidade de produtos: ${sessionItems.length}` }
              </p>
            </section>) }
        <Link to="/checkout" data-testid="checkout-products">Finalizar compra</Link>
      </section>
    );
  }
}

export default ShoppingCart;
