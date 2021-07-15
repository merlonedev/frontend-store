import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import AddToCartFromDetails from './AddToCartFromDetails';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.getProduct = this.getProduct.bind(this);
    this.state = {
      product: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { productId, categoryId } } } = this.props;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, '');
    const product = await results.find((item) => item.id === productId);
    this.setState({ product: { ...product }, loading: false });
  }

  render() {
    const { product, loading } = this.state;
    const { title, price, thumbnail, attributes } = product;

    if (loading) return <p>Carregando...</p>;
    return (
      <div className="details-page">
        <Link className="link" to="/">Voltar Para Pagina Principal</Link>
        <Link
          className="link"
          data-testid="shopping-cart-button"
          to="/Cart"
        >
          Ir para Carrinho
        </Link>
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>
          {`Price $ ${price}`}
        </p>
        <div className="details" style={ { width: '20rem' } }>
          <img src={ thumbnail } alt={ title } />
          <h3 className="h3-title">Especificações técnicas do produto</h3>
          <div className="list-group">
            <ul>
              { attributes.map((att) => (
                <li
                  className="list-group-item"
                  key={ att.id }
                >
                  { `${att.name} : ${att.value_name} ` }
                </li>
              )) }
            </ul>
          </div>
        </div>
        <AddToCartFromDetails productObj={ product } />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      productId: PropTypes.string,
      categoryId: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
