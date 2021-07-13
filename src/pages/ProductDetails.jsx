import React from 'react';
import { Link } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import { FiShoppingCart } from 'react-icons/fi';
import PropTypes from 'prop-types';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      product: {},
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
    console.log(product);
    this.setState({ product: { ...product } });
  }

  renderNavigation() {
    return (
      <nav>
        <Link to="/"><TiArrowBack /></Link>
        <Link to="/cart">
          <FiShoppingCart />
        </Link>
      </nav>
    );
  }

  render() {
    const {
      product: {
        title,
        price,
        thumbnail,
        attributes,
      },
    } = this.state;
    return (
      <div>
        { this.renderNavigation() }
        <h2 data-testid="product-detail-name">{ `${title} - R$ ${price}` }</h2>
        <div>
          <img src={ thumbnail } alt={ title } />
          <div>
            <h3>Especificações Técnicas</h3>
            <ul>
              { attributes
                .map(({ id, name, value_name: value }) => {
                  return <li key={ id }>{ `${name}: ${value}` }</li>;
                }) }
            </ul>
          </div>
        </div>
        <div />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: {
      productId: PropTypes.string,
      categoryId: PropTypes.string,
    },
  }).isRequired,
};

export default ProductDetails;
