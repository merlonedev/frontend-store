import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartIcon from '../Components/ShoppingCartIcon';

class ShoppingCart extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <ShoppingCartIcon />
        {
          products.length === 0
          && <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        }
        {
          products.map(({ id, title, thumbnail }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{title}</h3>
              <img src={ thumbnail } alt="Imagem do produto" />
            </div>
          ))
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default ShoppingCart;
