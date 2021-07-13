import React from 'react';
import PropTypes from 'prop-types';
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
      product: data.results.find((item) => item.id === id),
      loaded: true,
    });
  }

  render() {
    const { product, loaded } = this.state;
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
          </div>
        </div>
      </div>
    );
  }
}

Infos.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      product: PropTypes.string,
    }),
  }).isRequired,
};
