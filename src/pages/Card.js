import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCartLink from '../Components/ShoppingCartLink';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.setProduct = this.setProduct.bind(this);
    this.getProductToAddInCart = this.getProductToAddInCart.bind(this);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.setProduct();
  }

  getProductToAddInCart() {
    const { product } = this.state;
    product.quantityInCart = 1;
    const { addProductsInCart } = this.props;
    addProductsInCart(product);
    console.log(product);
  }

  async setProduct() {
    const { history } = this.props;
    const { location } = history;
    const { state } = location;
    const { title, id } = state;
    const { results } = await getProductsFromCategoryAndQuery('', title);
    const product = results.find((result) => result.id === id);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    const { title, thumbnail, price, condition } = product;
    // const { state_name: stateName } = address;

    // console.log(this.props);
    return (
      <div data-testeid="">
        { !title ? <p>Loading...</p>
          : (
            <div>
              <h1 data-testid="product-detail-name">{ title }</h1>
              <img src={ thumbnail } alt="Product" />
              <div className="infos">
                <ul>
                  Especificações Técnicas
                  <li>{ title }</li>
                  <li>
                    Preço: R$
                    { price }
                  </li>
                  {/* <li>{ stateName }</li> */}
                  <li>
                    Condição:
                    { condition }
                  </li>
                </ul>
              </div>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ this.getProductToAddInCart }
              >
                Adicionar ao carrinho
              </button>
            </div>)}
        <ShoppingCartLink />
      </div>
    );
  }
}

Card.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        id: PropTypes.string,
        address: PropTypes.shape({
          state_name: PropTypes.string,
        }),
        price: PropTypes.number,
        condition: PropTypes.string,
      }),
    }),
  }).isRequired,
  addProductsInCart: PropTypes.func.isRequired,
};

export default Card;
