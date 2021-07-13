import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

class CardItem extends Component {
  render() {
    const {
      title,
      thumbnail,
      price,
    } = this.props;
    return (
      <div className="card-item">
        <p>
          { title }
        </p>
        <img alt="" src={ thumbnail } />
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}

CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CardItem;
