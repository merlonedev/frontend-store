import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Products extends React.Component {
  constructor(props) {
    super(props)

   // this.setCart = this.setCart.bind(this)
  }

  // setCart({ target }) {
  //   const { id, price, title, thumbnail } = target
  //   const product = {
  //     id,
  //     price,
  //     title,
  //     thumbnail,
  //   }
  //   const { setCartStorage } = this.props
  //   setCartStorage(product)
    
  // }

  render() {
    const { productList, setCartStorage } = this.props;
    if (productList.length === 0) {
      return <div>Nenhum Produto Foi Encontrado</div>;
    }
    return (
      <div className="cards-div">
        { productList.map(({ id, price, title, thumbnail }) => (
          <div key={ id } data-testid="product" className="card" idproduct={ id }>
            <p className="card-title">{ title }</p>
            <img className="card-image" src={ thumbnail } alt={ title } />
            <p>{`R$: ${price}`}</p>
            <Link
              to={ `/details/${id}` }
              data-testid="product-detail-link"
            >
              VER DETALHES
            </Link>
            <button
             data-testid="product-add-to-cart"
             onClick={() => setCartStorage({id, title, price, thumbnail})}
             >Adicionar ao carrinho</button>
          </div>
        ))}
      </div>
    );
  }
}

Products.propTypes = {
  productList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Products;
