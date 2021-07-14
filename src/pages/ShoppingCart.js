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
          products.map(({ id, title, thumbnail, quantityInCart }) => (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{title}</h3>
              <img src={ thumbnail } alt="Imagem do produto" />
              <p data-testid="shopping-cart-product-quantity">
                {`Quantidade: ${quantityInCart}`}
              </p>
            </div>
          ))
        }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantityInCart: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};

export default ShoppingCart;
