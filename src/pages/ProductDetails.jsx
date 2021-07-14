import React from 'react';
import PropTypes from 'prop-types';
import * as Api from '../services/api';
import CartButton from '../components/ShoppingCart/CartButton';
import HomeButton from '../components/Home/HomeButton';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      product: [],
    };
    this.addToCart = this.addToCart.bind(this);
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

  addToCart(e, stateProduct) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    stateProduct.quantity = 1;
    if (!products.some((product) => product.id === stateProduct.id)) {
      products.push(stateProduct);
    } else {
      const currentIndex = products.map((product) => product.id).indexOf(stateProduct.id);
      products[currentIndex].quantity += 1;
    }
    localStorage.setItem('products', JSON.stringify(products));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <HomeButton />
        <p data-testid="product-detail-name">{product.title}</p>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ (e) => this.addToCart(e, product) }
        >
          Adicionar ao carrinho
        </button>
        <CartButton />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      pid: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default ProductDetails;
