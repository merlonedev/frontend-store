import React from 'react';

export default class CheckoutButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <button type="button" onClick={ onClick }>Comprar</button>
    );
  }
}
