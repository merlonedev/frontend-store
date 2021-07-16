import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import CartItem from './CartItem';

class ListProd extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     clickReceiver: [],
  //   };
  //   this.onclickFunc = this.onclickFunc.bind(this);
  // }

  // onclickFunc() {
  //   const { clickReceiver } = this.state;
  //   const { data } = this.props;
  //   const InfoONclick = { title, price, id };
  //   return sessionStorage.setItem('shopItens', JSON.stringify(clickReceiver));
  // }

  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return 'Nenhum produto foi encontrado';
    }

    let todosElementos = [];
    return (
      <section>
        {
          products.map((item) => {
            const { title, price, id, thumbnail } = item;
            const InfoONclick = { title, price, id };

            return (
              <div key={ id }>
                <Link
                  data-testid="product-detail-link"
                  to={ `/product/${id}` }
                >
                  <div data-testid="product">
                    <h6>{ title }</h6>
                    <img src={ thumbnail } alt={ title } />
                    <h6>{ price }</h6>
                  </div>
                </Link>
                <button
                  type="button"
                  data-testid="product-add-to-cart"
                  onClick={ () => {
                    todosElementos = [...todosElementos, InfoONclick];
                    return sessionStorage
                      .setItem('shopItens', JSON.stringify(todosElementos));
                  } }
                >
                  Add to Cart
                </button>
              </div>);
          })
        }
      </section>
    );
  }
}

ListProd.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ListProd;
