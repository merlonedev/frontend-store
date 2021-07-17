import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    const { products, addToShoppingCart } = this.props;

    return (
      <main>
        { products.map(({ title, thumbnail, price, id }) => (
          <section key={ id } data-testid="product">
            <h3>{ title }</h3>
            <img src={ thumbnail } alt={ title } />
            <p>{ price }</p>
            <Link
              data-testid="product-detail-link"
              // addToShoppingCart={ this.addToShoppingCart }
              to={
                { pathname: `/productDetail/${id}`, state: { title, thumbnail, price } }

              }
            >
              + Detalhes
            </Link>

            <button
              type="button"
              data-testid="product-add-to-cart"
              id={ id }
              onClick={ addToShoppingCart }
            >
              Adicionar ao carrinho
            </button>

          </section>
        ))}

      </main>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(Object).isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
};

export default ProductList;
