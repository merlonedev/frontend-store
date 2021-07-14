import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { FiShoppingCart } from 'react-icons/fi';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Form from '../components/Form';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
      loading: true,
    };
    this.getProduct = this.getProduct.bind(this);
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

    if (loading) return <Loading />;
    return (
      <div>
        <Link to="/"><TiArrowBack /></Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
        <h2 data-testid="product-detail-name">{ `${title} - R$ ${price}` }</h2>
        <div>
          <img src={ thumbnail.replace('I.jpg', 'O.jpg') } alt={ title } />
          <div>
            <h3>Especificações Técnicas</h3>
            <ul>
              { attributes.map(({ id, name, value_name: value }) => (
                <li key={ id }>
                  <strong>{ `${name}: ` }</strong>
                  { `${value}` }
                </li>
              )) }
            </ul>
          </div>
        </div>
        <div />
        <Form />
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
