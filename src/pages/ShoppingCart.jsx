import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };

    this.entregaEncomendaFunc = this.entregaEncomendaFunc.bind(this);
  }

  componentDidMount() {
    this.entregaEncomendaFunc();
  }

  entregaEncomendaFunc() {
    const entregaEncomenda = JSON.parse(sessionStorage.getItem(('shopItens')));
    this.setState((state) => ({
      ...state,
      products: entregaEncomenda,
    }));
  }

  render() {
    const { products } = this.state;
    const mensage = (
      <h5
        data-testid="shopping-cart-empty-message"
      >
        Seu carrinho está vazio
      </h5>
    );

    return (

      <div>
        <div>
          <Link to="/">Voltar para a Home</Link>
        </div>
        {products.length === 0
          ? mensage : (
            products.map((product) => (
              <li key={ product.id }>
                <div>
                  <p data-testid="shopping-cart-product-name">
                    { product.title }
                  </p>
                  <p>
                    { `R$ ${product.price}` }
                  </p>
                  <p data-testid="shopping-cart-product-quantity">
                    { products.length}
                  </p>
                </div>
              </li>
            ))
          )}

      </div>
    );
  }
}

export default ShoppingCart;
