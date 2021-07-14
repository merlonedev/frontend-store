import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Infos extends React.Component {
  constructor() {
    super();

    this.state = {
      product: {},
      loaded: false,
    };

    this.createProduct = this.createProduct.bind(this);
  }

  componentDidMount() {
    this.createProduct();
  }

  // Faz a chamada da API passando os parametros, e com o find encontra o elemento com o id utilizado.
  async createProduct() {
    const { match } = this.props;
    const { params } = match;
    const { id, product } = params;
    const data = await getProductsFromCategoryAndQuery(id, product);
    this.setState({
      product: data.results.find((item) => item.title === product),
      loaded: true,
    });
  }

  render() {
    const { product, loaded } = this.state;
    const { addToCartItem } = this.props;
    // Mostra o elemento h1 dizendo loading caso não tenha carregado a página ainda.
    if (!loaded) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        <h3 data-testid="product-detail-name">{product.title}</h3>
        <h2>{`R$ ${product.price}`}</h2>
        <div>
          <img src={ product.thumbnail } alt="a" />
          <div>
            <h4>Especificações Técnicas</h4>
            <ul>
              { product.attributes
                .map((item, index) => (
                  <p key={ index }>{`${item.name}: ${item.value_name}`}</p>)) }
            </ul>
            <div>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ () => addToCartItem(product) }
              >
                Adicionar ao carrinho
              </button>
            </div>
            <Link data-testid="shopping-cart-button" to="/cart">Ir para o carrinho</Link>
          </div>
        </div>
      </div>
    );
  }
}

Infos.propTypes = {
  addToCartItem: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      product: PropTypes.string,
    }),
  }).isRequired,
};
