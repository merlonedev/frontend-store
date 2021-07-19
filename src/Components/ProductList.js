import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    const { products, addToShoppingCart } = this.props;

    return (
      <main data-testid="product-list">
        { products.map(({ title, thumbnail, price, id }) => (
          <section key={ id } data-testid="product">
            <div className="title-div">
              <h3 data-testid="title-product-list">{ title }</h3>
            </div>
            <div className="img-div">
              <img src={ thumbnail } alt={ title } data-testid="img-product-list" />
            </div>
            <div className="price-details-button">
              <p>{`R$ ${price}` }</p>
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
            </div>
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
