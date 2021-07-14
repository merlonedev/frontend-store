import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);

    this.getProductToAddInCart = this.getProductToAddInCart.bind(this);
  }

  getProductToAddInCart(product) {
    console.log(product);
    const { addToCart } = this.props;
    addToCart(product);
  }

  render() {
    const { products } = this.props;

    if (products.length !== 0) {
      return (
        products.map((current) => (
          <div key={ current.id } data-testid="product">
            <Link
              data-testid="product-detail-link"
              to={ { pathname: '/card', state: current } }
              id={ current.id }
              onClick={ this.handleClick }
            >
              <img src={ current.thumbnail } alt="Product" />
              <p>
                { current.title }
                Preço:
                { current.price }
              </p>
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => this.getProductToAddInCart(current) }
            >
              Adicionar ao carrinho
            </button>
          </div>
        ))
      );
    }
    return (
      <div data-testid="product"> </div>
    );
  }
}

SearchResult.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default SearchResult;
