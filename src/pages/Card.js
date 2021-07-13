import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  constructor(props) {
    super(props);

    
  }

  render() {
    const { history } = this.props;
    const { location } = history;
    const { state } = location;
    const { id, title, thumbnail, price, address, seller_contact } = state;
    const { state_name } = address;
    const { contact } = seller_contact;

    console.log(state)

    return (
      <div>
        <h1 data-testeid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt="Product" />
        <div className="infos">
          <ul>
            Especificações Técnicas
            <li>{ title }</li>
            <li>Preço: R$ { price }</li>
            <li>{ state_name }</li>
            <li>{ contact }</li>
          </ul>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

export default Card;
