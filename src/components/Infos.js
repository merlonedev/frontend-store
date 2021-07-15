import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductReview from './ProductReview';

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
    const { shipping } = product;
    const { addToCartItem } = this.props;
    // Mostra o elemento h1 dizendo loading caso não tenha carregado a página ainda.
    if (!loaded) {
      return <h1>Loading</h1>;
    }
    return (
      <div>
        <h2 data-testid="product-detail-name">{product.title}</h2>
        <h3>{`R$ ${product.price}`}</h3>
        { shipping.free_shipping && <img data-testid="free-shipping" src="https://cdn.awsli.com.br/511/511886/arquivos/frete-gratis-1.png" alt="Frete Gratis" width="100px" /> }
        <div>
          <img src={ product.thumbnail } alt="thumbnail" />
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
        <ProductReview />
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
