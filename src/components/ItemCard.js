import React from 'react';
import PropTypes from 'prop-types';

class ItemCard extends React.Component {
  render() {
    const {
      item: { thumbnail, title, price },
    } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ `Foto do${title}` } />
        <h3>
          { title }
        </h3>
        <p>
          {`Price ${price}`}
        </p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  item: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default ItemCard;
