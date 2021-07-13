import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';

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
    const {
      product: {
        title,
        price,
        thumbnail,
        attributes,
      },
      loading,
    } = this.state;

    if (loading) return <p>Carregando...</p>;
    return (
      <div>
        <Link to="/">Voltar Para Pagina Principal</Link>
        <Link to="/Cart"> Ir para Carrinho</Link>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <p>
          {`Price ${price}`}
        </p>
        <div>
          <img src={ thumbnail } alt={ title } />
          <h2>Especificações Técnicas Do Produto</h2>
          <ul>
            { attributes.map((att) => (
              <li key={ att.id }>
                { `${att.name}: ${att.value_name} ` }
              </li>
            )) }
          </ul>
        </div>
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
