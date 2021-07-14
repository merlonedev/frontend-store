import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Details extends Component {
  render() {
    const { props: { location: { state } } } = this;
    const { title, price, thumbnail } = state;
    return (
      <div>
        <img alt="imagem do produto" src={ thumbnail } />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
