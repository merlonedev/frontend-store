import React, { Component } from 'react';

class Details extends Component {
  constructor() {
    super();
    this.localStorageGet = this.localStorageGet.bind(this);
    this.localChanger = this.localChanger.bind(this);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.localStorageGet();
  }

  localStorageGet() {
    const productStorage = JSON.parse(localStorage.getItem('prdctDetails'));
    console.log(productStorage);
    this.setState({
      product: productStorage,
    });
  }

  localChanger(product) {
    if (localStorage.getItem('Cart') !== null) {
      let local = JSON.parse(localStorage.getItem('Cart'));
      local = [...local, product];
      localStorage.setItem('Cart', JSON.stringify(local));
    } else {
      localStorage.setItem('Cart', JSON.stringify([product]));
    }
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, sold_quantity: soldQt, condition,
      available_quantity: avaliables } = product;
    return (
      <div>
        <img alt="Product Cover" src={ thumbnail } />
        <p>{ `${condition} | Preço: R$ ${price}` }</p>
        <p data-testid="product-detail-name">{ `Nome: ${title}` }</p>
        <p>{ `Quantidade vendida: ${soldQt}( ${avaliables} disponíveis)` }</p>
        <button
          type="button"
          onClick={ () => this.localChanger(product) }
          data-testid="product-detail-add-to-cart"
        >
          Adicionar item
        </button>
      </div>
    );
  }
}

export default Details;
