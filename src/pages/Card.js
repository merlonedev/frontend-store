import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Card extends React.Component {
  constructor() {
    super();

    this.setProduct = this.setProduct.bind(this);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.setProduct();
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
              <h1 data-testeid="product-detail-name">{ title }</h1>
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
            </div>)}
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
};

export default Card;
