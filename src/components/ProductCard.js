import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';

class ProductCard extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
  }

  handleClick() {
    this.setLocalStorage();
  }

  setLocalStorage() {
    const { product } = this.props;
    const { counter } = this.state;
    let key = product.title;
    key = `${counter} ${key}`;
    const value = JSON.stringify(product);
    localStorage.setItem(key, value);
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  }

  render() {
    const { product: {
      title,
      thumbnail,
      price,
      id,
    } } = this.props;

    return (
      <div
        data-testid="product"
        className="product-container"
      >
        <h1 className="title-product">{ title }</h1>
        <img src={ thumbnail } alt={ title } className="image-product" />
        <p className="price-product">{`R$ ${price}`}</p>
        <Link
          data-testid="product-detail-link"
          to={ `/productDetails/${id}` }
        >
          Ver Detalhes
        </Link>
        <Button
          testId="product-add-to-cart"
          onClick={ this.handleClick }
          value="Adicionar ao Carrinho"
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;

export default ProductCard;
