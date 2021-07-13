import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CommentForm from './CommentForm';
import GenComment from './GenComment';

import { getProductsFromCategoryAndQuery } from '../services/api';

const savedAvaliations = JSON.parse(localStorage.getItem('avaliations'));

const initialSatate = {
  product: {},
  aval: {
    email: '',
    rate: '0',
    comment: '',
  },
  avaliations: !savedAvaliations ? [] : savedAvaliations,
};

class DetailedProduct extends React.Component {
  constructor() {
    super();
    this.setProductById = this.setProductById.bind(this);
    this.handleChangeAval = this.handleChangeAval.bind(this);
    this.handleSendAval = this.handleSendAval.bind(this);
    this.state = initialSatate;
  }

  componentDidMount() {
    this.setProductById();
  }

  handleChangeAval({ target }) {
    const { aval } = this.state;
    const { value, name } = target;
    aval[name] = value;
    this.setState({ aval });
  }

  handleSendAval() {
    const { product: { id }, avaliations, aval } = this.state;
    const addAval = [...avaliations, { id, aval }];
    localStorage.setItem('avaliations', JSON.stringify(addAval));
    this.setState({
      avaliations: addAval }, () => this.setState({ aval: {
      email: '',
      rate: '0',
      comment: '',
    } }));
  }

  async setProductById() {
    const { match } = this.props;
    const { id, title } = match.params;
    const { results } = await getProductsFromCategoryAndQuery('', title);
    const product = results.find(({ id: pId }) => id === pId);
    this.setState({ product });
  }

  render() {
    const { product, aval, avaliations } = this.state;
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
          <Link to="/shopping-cart">Carrinho de Compras</Link>
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
                <CommentForm
                  aval={ aval }
                  handleChangeAval={ this.handleChangeAval }
                  handleSendAval={ this.handleSendAval }
                />
                <GenComment
                  productId={ id }
                  avaliations={ avaliations }
                />
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
