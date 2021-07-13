import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getProductsFromCategoryAndQuery } from '../services/api';

class DetailedProduct extends React.Component {
  constructor() {
    super();
    this.setProductById = this.setProductById.bind(this);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.setProductById();
  }

  async setProductById() {
    const { match } = this.props;
    const { id, title } = match.params;
    const { results } = await getProductsFromCategoryAndQuery('', title);
    const product = results.find(({ id: pId }) => id === pId);
    this.setState({ product });
  }

  render() {
    const { product } = this.state;
    let allElements = [];
    const {
      id,
      title,
      price,
      thumbnail,
      attributes,
    } = product;

    return (
      <section>
        <header>
          <Link to="/">Home</Link>
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
          >
            Carrinho de Compras
          </Link>
        </header>
        <main data-testid="product">
          {!title
            ? <h1>Loading...</h1>
            : (
              <section>
                <div>
                  <h3 data-testid="product-detail-name">{ title }</h3>
                  <p>{ `R$ ${price}` }</p>
                  <img src={ thumbnail } alt={ title } />
                </div>
                <div>
                  <ul>
                    { attributes.map(({ name, value_name: value }) => (
                      <li key={ name }>
                        { `${name}: ${value}` }
                      </li>)) }
                  </ul>
                </div>
                <button
                  type="button"
                  data-testid="product-detail-add-to-cart"
                  onClick={ (
                    () => {
                      const cartElements = { id, title, price };
                      allElements = [...allElements, cartElements];
                      return sessionStorage
                        .setItem('addCart', JSON.stringify(allElements));
                    }
                  ) }
                >
                  Adicionar ao Carrinho
                </button>
              </section>)}
        </main>
      </section>
    );
  }
}

DetailedProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DetailedProduct;
