import React from 'react';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductDetail from './ProductDetail';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    console.log(product);
    const { title, price, thumbnail, id } = product;
    return (
      <BrowserRouter>
        <Link data-testid="product-detail-link" to={ `/productdetail/${id}` }>
          <div data-testid="product">
            <img alt="Foto do produto" src={ thumbnail } />
            <div className="product-card-body">
              <h4 className="product-card-title">{title}</h4>
              <h5 className="product-card-price">{`Preço: R$${price}`}</h5>
            </div>
          </div>
        </Link>
        <Route
          path="/productdetail/:id"
          render={ (props) => <ProductDetail { ...props } productTitle={ title } /> }
        />
      </BrowserRouter>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
