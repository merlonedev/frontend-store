import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: {},
    };

    this.fetchProducts = this.fetchProducts.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    const { match: { params: { id } } } = this.props;
    const API = `https://api.mercadolibre.com/items/${id}`;
    let response = await fetch(API);
    response = await response.json();
    this.setState({
      product: response,
    });
  }

  render() {
    const { product: {
      thumbnail,
      title,
      available_quantity: quantity,
      price,
      warranty,
      attributes,
    } } = this.state;

    return (
      <div>
        <Link to="/">
          <i className="fas fa-undo-alt" />
        </Link>
        <h1 data-testid="product-detail-name">{title }</h1>
        <img
          style={ { width: '200px' } }
          src={ thumbnail }
          alt={ title }
        />
        <p>{`Em estoque: ${quantity}`}</p>
        <p>{`Preço: R$ ${price}`}</p>
        <p>{`${warranty}`}</p>
        {attributes && attributes.map((e, index) => (
          <p key={ e.id }>
            {
              `${attributes && attributes[index].name}:
              ${attributes && attributes[index].value_name}`
            }
          </p>
        ))}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }).isRequired,
};

export default ProductDetails;
