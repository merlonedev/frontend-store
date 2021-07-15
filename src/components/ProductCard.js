import React from 'react';
import PropTypes from 'prop-types';
import ButtonToCard from './ButtonToCard';
import { Link } from 'react-router-dom';


class ProductCard extends React.Component {
  constructor() {
    super();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(id) {
    const { product } = this.props;
    let getItem = JSON.parse(localStorage.getItem('productList'));
    if (!getItem) {
      localStorage.setItem('productList', JSON.stringify([product]));
      return;
    }
    const repeatProduct = getItem.some((item) => item.id === id);
    if (!repeatProduct) {
      getItem = [...getItem, product];
      localStorage.setItem('productList', JSON.stringify(getItem));
    }
  }

  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <section data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${id}`,
            data: title,
          } }
        >
          Detalhes do Produto
        </Link>
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <ButtonToCard />
        <p>
          Preço: R$
          { price }
        </p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addToCart(id) }
        >
          Adicionar ao carrinho
        </button>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
