import React from 'react';
import PropTypes from 'prop-types';
import * as Api from '../services/api';
import CartButton from '../components/ShoppingCart/CartButton';
import HomeButton from '../components/Home/HomeButton';
import Form from '../components/Form/Form';

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
    const { attributes } = product;
    return (
      <div>
        <HomeButton />
        <CartButton />
        <p data-testid="product-detail-name">{product.title}</p>
        <img src={ product.thumbnail } alt={ product.title } />
        <div>
          {
            attributes && attributes.map((att) => (
              <p key={ att.name }>
                {`${att.name}: ${att.value_name}`}
              </p>))
          }
        </div>
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ (e) => this.addToCart(e, product) }
        >
          Adicionar ao carrinho
        </button>
        <Form />
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
