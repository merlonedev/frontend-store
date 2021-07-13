import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';

class Details extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      product: [],
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  setProduct() {
    const { match: { params: { pid } } } = this.props;
    const { productList } = this.state;
    const p = productList.filter((prod) => prod.id === pid);

    this.setState({
      product: p[0],
    });
  }

  async fetchAPI() {
    const { match: { params: { id } } } = this.props;
    const result = await Api.getProductsFromCategoryAndQuery(id, '')
      .then((prod) => prod.results);
    console.log(result);
    this.setState({
      productList: result,
    }, () => this.setProduct());
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{product.title}</p>
        <Link to="/" data-testid="shopping-cart-button">
          <img src="https://img.icons8.com/ios/50/000000/back--v1.png" alt="voltar" className="back-image" />
        </Link>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      pid: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default Details;
